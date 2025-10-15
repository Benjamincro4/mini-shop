import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import products from "../data/products";

test("muestra los detalles del producto seleccionado", () => {
  const producto = products[0];

  render(
    <MemoryRouter initialEntries={[`/product/${producto.id}`]}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );

  // Verificamos que se muestran los datos del producto
  expect(screen.getByText(producto.name)).toBeInTheDocument();
  expect(screen.getByText(`Marca:`)).toBeInTheDocument();
  expect(screen.getByText(`${producto.price} €`)).toBeInTheDocument();
});
