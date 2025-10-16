import React from 'react';

export default function ProductDescription({ p }) {
  // el API puede traer nombres con pequeñas faltas (dimentions/secondaryCmera)
  const primaryCamera = p.primaryCamera || p.primaryCmera || p.primary_camera;
  const secondaryCamera = p.secondaryCmera || p.secondaryCamera || p.secondary_camera;
  const dimensions = p.dimentions || p.dimensions;
  const resolution = p.displayResolution || p.display_resolution;

  return (
    <div className="desc">
      <dl>
        <dt>Marca</dt><dd>{p.brand}</dd>
        <dt>Modelo</dt><dd>{p.model}</dd>
        <dt>Precio</dt><dd>{p.price ? `${p.price} €` : '—'}</dd>
        <dt>CPU</dt><dd>{p.cpu || '—'}</dd>
        <dt>RAM</dt><dd>{p.ram || '—'}</dd>
        <dt>Sistema Operativo</dt><dd>{p.os || '—'}</dd>
        <dt>Resolución</dt><dd>{resolution || '—'}</dd>
        <dt>Batería</dt><dd>{p.battery || '—'}</dd>
        <dt>Cámaras</dt>
        <dd>
          {Array.isArray(primaryCamera) ? primaryCamera.join(', ') : (primaryCamera || '—')}
          {secondaryCamera ? ` | Frontal: ${Array.isArray(secondaryCamera) ? secondaryCamera.join(', ') : secondaryCamera}` : ''}
        </dd>
        <dt>Dimensiones</dt><dd>{dimensions || '—'}</dd>
        <dt>Peso</dt><dd>{p.weight || '—'}</dd>
      </dl>
    </div>
  );
}
