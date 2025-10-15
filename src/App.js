import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header">
          <h1>📱 MiniShop</h1>
          <nav>
            <a href="/">Inicio</a>
            <a href="#about">Sobre nosotros</a>
            <a href="#contact">Contacto</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

