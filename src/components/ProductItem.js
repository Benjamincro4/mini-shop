import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  const { id, brand, model, price, imgUrl } = product;
  return (
    <div className="card">
      {imgUrl ? <img src={imgUrl} alt={`${brand} ${model}`} /> : <div className="img-ph">Sin imagen</div>}
      <h3>{brand}</h3>
      <p className="model">{model}</p>
      {price ? <p className="price">{price} €</p> : <p className="price muted">—</p>}
      <Link to={`/product/${id}`} className="btn">Ver detalles</Link>
    </div>
  );
}
