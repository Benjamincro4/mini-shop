const ONE_HOUR = 60 * 60 * 1000;

export async function getWithCache(key, fetcher, ttlMs = ONE_HOUR) {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts < ttlMs) {
        return data;
      }
    }
  } catch (_) { /* ignore */ }

  const data = await fetcher();
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
  } catch (_) { /* storage full or disabled */ }
  return data;
}
