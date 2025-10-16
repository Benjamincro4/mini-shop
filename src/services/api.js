const API_BASE = 'https://itx-frontend-test.onrender.com';

async function fetchJson(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`API ${path} ${res.status}`);
  return res.json();
}

export function getProducts() {
  return fetchJson('/api/product');
}

export function getProductById(id) {
  return fetchJson(`/api/product/${id}`);
}

export async function addToCart({ id, colorCode, storageCode }) {
  const res = await fetch(`${API_BASE}/api/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, colorCode, storageCode })
  });
  if (!res.ok) throw new Error(`API /api/cart ${res.status}`);
  return res.json(); // { count: number }
}
