import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { getWithCache } from '../utils/cache';
import ProductDescription from './ProductDescription';
import ProductActions from './ProductActions';

export default function ProductDetail() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    let alive = true;
    setLoading(true);
    getWithCache(`product:${id}`, () => getProductById(id))
      .then(data => {
        if (!alive) return;
        setP({ ...data, imgUrl: data.imgUrl || data.photo || data.image || undefined });
        setErr('');
      })
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
    return () => { alive = false; };
  }, [id]);

  if (loading) return <p className="status">Cargando producto…</p>;
  if (err) return <p className="status error">Error: {err}</p>;
  if (!p) return <p className="status">Producto no encontrado</p>;

  return (
    <div className="pdp">
      <div className="pdp-left">
        {p.imgUrl ? <img src={p.imgUrl} alt={`${p.brand} ${p.model}`} /> : <div className="img-ph large">Sin imagen</div>}
      </div>

      <div className="pdp-right">
        <h2 className="title">{p.brand} {p.model}</h2>
        <ProductDescription p={p} />
        <ProductActions p={p} />
        <Link to="/" className="btn link">← Volver al listado</Link>
      </div>
    </div>
  );
}
