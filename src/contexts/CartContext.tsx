import { produce } from "immer";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number; // Quantidade de um determinado item no carrinho
}

interface CartContextType {
  cartItems: CartItem[]; // Array de itens do carrinho
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void; // Função para adicionar um item do tipo CartItem ao carrinho
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;

}

interface CartContextProviderProps {
  children: ReactNode; // Componentes filhos que utilizarão o contexto do carrinho
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";


// Criando o contexto do carrinho
export const CartContext = createContext({} as CartContextType);

// Componente que irá prover o contexto do carrinho para os componentes filhos
export function CartContextProvider({ children }: CartContextProviderProps) {
  // State para armazenar os itens do carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, CartItem) => {
    return total + CartItem.price * CartItem.quantity;
  }, 0)

  // Função para adicionar um item ao carrinho ou incrementar a quantidade caso já exista
  function addCoffeeToCart(coffee: CartItem) {
    // Verifica se o item já existe no carrinho
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    // Utiliza o pacote "immer" para criar um novo estado imutável com os itens do carrinho
    const newCart = produce(cartItems, (draft) => {
      // Caso o item não exista no carrinho, adiciona-o
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        // Caso o item já exista, incrementa a quantidade
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    // Atualiza o estado do carrinho com o novo estado imutável
    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }
  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }
  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <CartContext.Provider value={{
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
