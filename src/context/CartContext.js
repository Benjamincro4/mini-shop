import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [count, setCount] = useState(0);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem('cartCount');
    if (saved) setCount(Number(saved) || 0);
  }, []);

  // Guardar en localStorage al cambiar
  useEffect(() => {
    localStorage.setItem('cartCount', String(count));
  }, [count]);

  const value = { count, setCount };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
