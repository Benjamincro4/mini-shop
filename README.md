# MiniShop - Front-End Test

Aplicación SPA desarrollada con **React** para simular una tienda de dispositivos móviles.

## Descripción general

La aplicación consta de **dos vistas principales**:

1. **Vista principal – Listado de productos**  
   Muestra una cuadrícula con los distintos dispositivos móviles disponibles, con su nombre, marca, imagen y precio.

2. **Vista de detalles del producto**  
   Al hacer clic en un producto, se muestra una vista detallada con su información completa y un botón para volver al listado.

Toda la navegación se realiza **sin recargar la página**, utilizando **React Router DOM** (enrutado del lado del cliente), cumpliendo con el concepto de **SPA**.

## Scripts disponibles
| Comando | Descripción |
|----------|--------------|
| `npm start` | Inicia la aplicación en modo desarrollo |
| `npm run build` | Compila para producción |
| `npm test` | Ejecuta los tests |
| `npm run lint` | Analiza el código con ESLint |

## Instalación y ejecución
1. Clonar este repositorio  
   ```bash
   git clone https://github.com/Benjamincro4/mini-shop.git
   cd mini-shop

2. Instalar dependencias
   npm install

3. Iniciar app
   npm start