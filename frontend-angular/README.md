# Frontend - Carrito de Compras (Angular 17)

Vista de carrito de compras retail: lista 3 productos con nombre y precio, y un
botón "Proceder al Pago" que dispara una petición HTTP POST al backend
(`http://localhost:8080/api/pagos/procesar`).

## Requisitos

- Node.js 20
- npm

## Instalar y ejecutar

```bash
npm install
npm start
```

Aplicación en `http://localhost:4200`. Debe estar corriendo el backend
(Spring Boot) en el puerto 8080.

## Build de producción

```bash
npm run build
```
