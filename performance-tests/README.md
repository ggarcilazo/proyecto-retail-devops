# Pruebas de Carga - Cyber Days

Simula **500 usuarios virtuales concurrentes** atacando
`POST /api/pagos/procesar` durante **30 segundos**, validando que el tiempo de
respuesta sea menor a **200 ms** y que las peticiones devuelvan HTTP 200.

## Opción 1: k6

Requiere [k6](https://k6.io/).

```bash
k6 run pagos_carga.js
```

Con el backend en otro host:

```bash
k6 run -e API_URL=http://mi-servidor:8080 pagos_carga.js
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
