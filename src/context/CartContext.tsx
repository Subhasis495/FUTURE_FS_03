import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurantId: string;
  image: string;
  customizations?: string[];
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
  restaurantId: string | null;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
  restaurantId: null,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let updatedItems;
      
      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }
      
      const totalAmount = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: updatedItems,
        totalAmount,
        totalItems,
        restaurantId: action.payload.restaurantId,
      };
    
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const newTotalAmount = filteredItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newTotalItems = filteredItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: filteredItems,
        totalAmount: newTotalAmount,
        totalItems: newTotalItems,
        restaurantId: filteredItems.length === 0 ? null : state.restaurantId,
      };
    
    case 'UPDATE_QUANTITY':
      const updatedQuantityItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      
      const updatedTotalAmount = updatedQuantityItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const updatedTotalItems = updatedQuantityItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: updatedQuantityItems,
        totalAmount: updatedTotalAmount,
        totalItems: updatedTotalItems,
        restaurantId: updatedQuantityItems.length === 0 ? null : state.restaurantId,
      };
    
    case 'CLEAR_CART':
      return initialState;
    
    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};