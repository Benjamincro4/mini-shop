import React, { useEffect, useMemo, useState } from 'react';
import { getProducts } from '../services/api';
import { getWithCache } from '../utils/cache';
import SearchBar from './SearchBar';
import ProductItem from './ProductItem';

export default function ProductList() {
  const [all, setAll] = useState([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    let alive = true;
    setLoading(true);
    getWithCache('products:list', () => getProducts())
      .then((data) => {
        if (!alive) return;
        // normalizamos posible nombre de imagen si existe en el payload
        const normalized = data.map(x => ({
          ...x,
          imgUrl: x.imgUrl || x.photo || x.image || undefined
        }));
        setAll(normalized);
        setErr('');
      })
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
    return () => { alive = false; };
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return all;
    return all.filter(p =>
      String(p.brand || '').toLowerCase().includes(s) ||
      String(p.model || '').toLowerCase().includes(s)
    );
  }, [q, all]);

  if (loading) return <p className="status">Cargando productos…</p>;
  if (err) return <p className="status error">Error: {err}</p>;

  return (
    <div className="page">
      <SearchBar value={q} onChange={setQ} />
      <div className="grid4">
        {filtered.map(p => <ProductItem key={p.id} product={p} />)}
      </div>
      {filtered.length === 0 && <p className="status">No hay resultados para “{q}”.</p>}
    </div>
  );
}

