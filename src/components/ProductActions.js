import React, { useMemo, useState } from 'react';
import { addToCart } from '../services/api';
import { useCart } from '../context/CartContext';

export default function ProductActions({ p }) {
    const colors = p?.options?.colors || [];
    const storages = p?.options?.storages || [];
    const defaultColor = useMemo(() => (colors[0]?.code ?? ''), [colors]);
    const defaultStorage = useMemo(() => (storages[0]?.code ?? ''), [storages]);
    const [colorCode, setColorCode] = useState(defaultColor);
    const [storageCode, setStorageCode] = useState(defaultStorage);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const { count, setCount } = useCart();

    async function onAdd() {
        if (!p?.id) return;
        setLoading(true);
        setMsg('');
        try {
            const { count: apiCount } = await addToCart({ id: String(p.id), colorCode, storageCode });

            // Si la API devuelve siempre 1, acumulamos manualmente.
            setCount(prev => (apiCount > prev ? apiCount : prev + 1));
            setMsg('Añadido al carrito ✅');
        } catch (e) {
            setMsg('Error al añadir al carrito');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="actions">
            <div className="field">
                <label>Color</label>
                <select value={colorCode} onChange={(e) => setColorCode(Number(e.target.value))}>
                    {colors.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                </select>
            </div>

            <div className="field">
                <label>Almacenamiento</label>
                <select value={storageCode} onChange={(e) => setStorageCode(Number(e.target.value))}>
                    {storages.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
                </select>
            </div>

            <button className="btn primary" onClick={onAdd} disabled={loading || !p?.id}>
                {loading ? 'Añadiendo…' : 'Añadir al carrito'}
            </button>
            {msg && <p className="hint">{msg}</p>}
        </div>
    );
}
