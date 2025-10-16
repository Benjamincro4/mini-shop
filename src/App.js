import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './styles.css';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

