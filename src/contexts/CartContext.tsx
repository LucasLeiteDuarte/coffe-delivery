import { produce } from "immer"; //A biblioteca immer é utilizada para produzir um novo estado imutável ao modificar os itens do carrinho. Isso garante que as mudanças no estado sejam gerenciadas de maneira segura e eficiente.
import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number; // Quantidade de um determinado item no carrinho
}


interface CartContextType {
  cartItems: CartItem[]; // Array de itens no carrinho
  cartQuantity: number; // Total de itens no carrinho
  cartItemsTotal: number; // Total do valor dos itens no carrinho
  addCoffeeToCart: (coffee: CartItem) => void; // Função para adicionar um item ao carrinho
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void; // Função para alterar a quantidade de um item no carrinho
  removeCartItem: (cartItemId: number) => void; // Função para remover um item do carrinho
  cleanCart: () => void; // Função para limpar o carrinho
}
// Componente provedor do contexto do carrinho
export const CartContext = createContext({} as CartContextType);

// Interface para os props do provedor do contexto do carrinho
interface CartContextProviderProps {
  children: ReactNode; // Componentes filhos
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  // Estado local para os itens no carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Carrega os itens do carrinho do localStorage ou inicia um array vazio
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  // Calcula o total de itens no carrinho
  const cartQuantity = cartItems.length;

  // Calcula o valor total dos itens no carrinho
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  // Função para adicionar um item ao carrinho
  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    // Cria um novo estado do carrinho usando o Immer
    const newCart = produce(cartItems, (draft) => {
      // Se o café ainda não estiver no carrinho, adiciona-o
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        // Se o café já estiver no carrinho, aumenta a quantidade
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    // Atualiza o estado do carrinho
    setCartItems(newCart);
  }

  // Função para alterar a quantidade de um item no carrinho
  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    // Cria um novo estado do carrinho usando o Immer
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        // Aumenta ou diminui a quantidade com base no tipo
        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    // Atualiza o estado do carrinho
    setCartItems(newCart);
  }

  // Função para remover um item do carrinho
  function removeCartItem(cartItemId: number) {
    // Cria um novo estado do carrinho usando o Immer
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        // Remove o item do carrinho
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    // Atualiza o estado do carrinho
    setCartItems(newCart);
  }

  // Função para limpar o carrinho
  function cleanCart() {
    // Remove todos os itens do carrinho
    setCartItems([]);
  }

  // Efeito para salvar os itens do carrinho no armazenamento local
  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // Retorna o provedor do contexto com as funções e valores necessários
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
