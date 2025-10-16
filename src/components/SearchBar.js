import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar por marca o modelo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
