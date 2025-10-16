# MiniShop - Front-End Test

## Descripción general

Mini Shop es una miniaplicación SPA desarrollada en **React**, que permite listar y consultar detalles de dispositivos móviles, además de añadirlos a un carrito de compra.

La aplicación cumple con todos los requisitos del test técnico, incluyendo:
- Listado de productos (PLP) con búsqueda en tiempo real.  
- Detalle de producto (PDP) con selector de color y almacenamiento.  
- Carrito global persistente en cabecera.  
- Enrutado SPA con React Router.  
- Caché local de 1 hora para reducir llamadas a la API.  

---

## Scripts disponibles
| Comando | Descripción |
|----------|--------------|
| `npm start` | Inicia la aplicación en modo desarrollo |
| `npm run build` | Compila para producción |
| `npm test` | Ejecuta los tests |
| `npm run lint` | Analiza el código con ESLint |

## Instalación y ejecución
### 1. Clonar este repositorio  
   bash
   git clone https://github.com/Benjamincro4/mini-shop.git
   cd mini-shop

### 2. Instalar dependencias
   npm install

### 3. Iniciar app
   npm start

### 4. Compilación
   npm run build

### 5. Test y lint
   npm test
   npm run lint

## Estructura del Proyecto
   src/
├── components/
│   ├── Header.js
│   ├── SearchBar.js
│   ├── ProductItem.js
│   ├── ProductList.js
│   ├── ProductDetail.js
│   ├── ProductDescription.js
│   └── ProductActions.js
├── context/
│   └── CartContext.js
├── services/
│   └── api.js
├── utils/
│   └── cache.js
├── App.js
├── index.js
└── styles.css   