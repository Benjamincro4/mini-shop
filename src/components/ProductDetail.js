import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h2>{product.name}</h2>
        <p><strong>Marca:</strong> {product.brand}</p>
        <p><strong>Precio:</strong> {product.price} €</p>
        <p>{product.description}</p>
        <Link to="/" className="btn">Volver</Link>
      </div>
    </div>
  );
}

export default ProductDetail;
