import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function crumbsFromLocation(location) {
  const parts = location.pathname.split('/').filter(Boolean);
  const acc = [];
  return parts.map((p, idx) => {
    acc.push(p);
    const path = '/' + acc.join('/');
    const label = p === 'product' ? 'Producto' : decodeURIComponent(p);
    return { label, path, last: idx === parts.length - 1 };
  });
}

export default function Header() {
  const { count } = useCart();
  const location = useLocation();
  const crumbs = crumbsFromLocation(location);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="brand">📱 MiniShop</Link>
        <nav className="breadcrumbs">
          <Link to="/">Inicio</Link>
          {crumbs.map((c, i) => (
            <span key={i}>
              <span className="sep"> / </span>
              {c.last ? <span>{c.label}</span> : <Link to={c.path}>{c.label}</Link>}
            </span>
          ))}
        </nav>
      </div>
      <div className="header-right">
        🛒 <span className="cart-count">{count}</span>
      </div>
    </header>
  );
}
