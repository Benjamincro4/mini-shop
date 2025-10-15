import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function ProductList() {
  return (
    <div className="product-list">
      <h2>Productos disponibles</h2>
      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.brand}</p>
            <p className="price">{p.price} €</p>
            <Link to={`/product/${p.id}`} className="btn">Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
