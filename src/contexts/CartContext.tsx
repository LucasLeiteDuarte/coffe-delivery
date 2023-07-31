import { produce } from "immer";
import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number; // Quantidade de um determinado item no carrinho
}

interface CartContextType {
  cartItems: CartItem[]; // Array de itens do carrinho
  addCoffeeToCart: (coffee: CartItem) => void; // Função para adicionar um item do tipo CartItem ao carrinho
}

interface CartContextProviderProps {
  children: ReactNode; // Componentes filhos que utilizarão o contexto do carrinho
}

// Criando o contexto do carrinho
export const CartContext = createContext({} as CartContextType);

// Componente que irá prover o contexto do carrinho para os componentes filhos
export function CartContextProvider({ children }: CartContextProviderProps) {
  // State para armazenar os itens do carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
        draft[coffeeAlreadyExistsInCart].quantity += 1;
      }
    });

    // Atualiza o estado do carrinho com o novo estado imutável
    setCartItems(newCart);
  }

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
