# Reporte de Prueba de Carga k6 - Cyber Days Promart

## Resumen del hito de QA

| Métrica | Valor |
|---|---|
| Usuarios virtuales | 500 VUs |
| Duración | 30 s |
| Peticiones totales | 146,864 |
| Peticiones/segundo | 4,879 |
| Tasa de éxito | 99.87 % |
| Tiempo medio de respuesta | 1.23 ms |
| Percentil 95 (p95) | 3.65 ms |
| Percentil 90 (p90) | 2.56 ms |
| Petición más lenta (max) | 23.96 ms |
| Datos recibidos | 60 MB (2.0 MB/s) |
| Datos enviados | 26 MB (853 kB/s) |

## Checks de validación

| Check | Resultado |
|---|---|
| Código HTTP es 200 | 146,661 / 146,864 ✓ |
| Tiempo de respuesta < 200 ms | 146,864 / 146,864 ✓ |

## Umbrales (thresholds)

| Umbral | Valor obtenido | Estado |
|---|---|---|
| p(95) de duración < 200 ms | 3.65 ms | ✓ CUMPLE |
| Tasa de fallos < 1 % | 0.14 % | ✓ CUMPLE |

## Hallazgo de QA

- Con **500 VUs simultáneos**, el microservicio de pagos responde con latencias
  sub-4 ms (p95) y sostiene **~4,879 peticiones/segundo** sin degradación.
- Se observaron **203 rechazos TCP al inicio del run** (0.14 %), atribuidos a la
  cola SYN del stack de Windows al abrir 500 sockets simultáneos, no a una
  limitación del backend. Con 200 VUs la tasa de fallos fue **0.00 %**.
- Se ajustó Tomcat (`accept-count=2000`, `max-connections=20000`) para
  absorber el pico inicial de conexiones.

## Evidencia

- `k6_salida.txt` - Salida completa de la consola de k6.
- `resultados_k6.json` - Serie temporal completa de la prueba.
- `resumen_k6.json` - Resumen exportado por k6 (`--summary-export`).
- `reporte_k6.png` - Captura del reporte final.

## Cómo reproducirlo

```bash
# 1. Levantar el backend
cd backend-java-pagos
mvn clean spring-boot:run

# 2. Ejecutar la prueba (500 VUs x 30s)
cd ../performance-tests
k6 run test_estres.js

# 3. Generar evidencia
k6 run test_estres.js --summary-export resumen_k6.json --out json=resultados_k6.json
```
