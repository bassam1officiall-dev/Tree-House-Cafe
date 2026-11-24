import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, OrderItem } from '../types';

interface OrderContextType {
  orderItems: OrderItem[];
  addItem: (item: MenuItem, option?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearOrder: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  totalItemsCount: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const STORAGE_KEY = 'treehouse_order_items';

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orderItems));
    } catch {
      // Ignore storage errors
    }
  }, [orderItems]);

  const addItem = (item: MenuItem, option?: string) => {
    setOrderItems((prev) => {
      const existingIndex = prev.findIndex((oi) => oi.item.id === item.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }
      return [...prev, { item, quantity: 1, selectedOption: option }];
    });
    // Visual feedback or open drawer optional
  };

  const removeItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((oi) => oi.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((oi) => {
          if (oi.item.id === itemId) {
            const newQty = oi.quantity + delta;
            return newQty > 0 ? { ...oi, quantity: newQty } : null;
          }
          return oi;
        })
        .filter((oi): oi is OrderItem => oi !== null);
    });
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  const totalItemsCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        addItem,
        removeItem,
        updateQuantity,
        clearOrder,
        isDrawerOpen,
        setIsDrawerOpen,
        totalItemsCount,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
