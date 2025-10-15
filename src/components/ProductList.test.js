import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductList from "./ProductList";
import products from "../data/products";

test("renderiza el listado de productos", () => {
  render(
    <MemoryRouter>
      <ProductList />
    </MemoryRouter>
  );

  // Comprobamos que se muestra el título principal
  expect(screen.getByText("Productos disponibles")).toBeInTheDocument();

  // Comprobamos que al menos se renderiza un producto del archivo de datos
  const primerProducto = products[0].name;
  expect(screen.getByText(primerProducto)).toBeInTheDocument();
});
