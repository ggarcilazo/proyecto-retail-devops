# Pruebas de Carga - Cyber Days

Simula **500 usuarios virtuales concurrentes** atacando
`POST /api/pagos/procesar` durante **30 segundos**, validando que el tiempo de
respuesta sea menor a **200 ms** y que las peticiones devuelvan HTTP 200.

## Evidencia del hito de QA

- `test_estres.js` - Script oficial k6 (500 VU x 30s) proporcionado por el
  Compañero A (adaptado para usar el puerto configurable `API_URL`).
- `reporte_k6.md` - Resumen del reporte con métricas clave.
- `reporte_k6.png` - Captura del reporte final de la consola de k6.
- `resumen_k6.json` - Resumen exportado con `--summary-export`.

Resultados obtenidos: **146,864 peticiones en 30s (~4,879 req/s)**, p95 de
**3.65 ms**, **99.87 % de éxito**, ambos umbrales cumplidos.

## Opción 1: k6

Requiere [k6](https://k6.io/).

```bash
k6 run test_estres.js
```

Con el backend en otro host:

```bash
k6 run -e API_URL=http://mi-servidor:8080 test_estres.js
```

Generar la evidencia del reporte:

```bash
k6 run test_estres.js --summary-export resumen_k6.json --out json=resultados_k6.json
```

## Opción 2: JMeter

Requiere [Apache JMeter](https://jmeter.apache.org/) (Java 8+).

Abrir la GUI:

```bash
jmeter -t cyber_days_jmeter.jmx
```

Ejecutar en modo consola (sin GUI) generando reporte:

```bash
jmeter -n -t cyber_days_jmeter.jmx -l resultados.jtl -e -o reporte-html
```

Nota: JMeter queda instalado en
`C:\Users\cabah_lusn028\AppData\Local\Programs\JMeter\bin\jmeter.bat`.

## Umbrales validados

- Respuesta < 200 ms
- HTTP 200 en todas las peticiones
