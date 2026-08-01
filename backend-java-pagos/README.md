# Backend - Microservicio de Pagos (Java Spring Boot)

Endpoint POST `/api/pagos/procesar`. Recibe un JSON con `clienteId` y `monto`,
simula una validación transaccional aleatoria (APROBADO/RECHAZADO) y responde
HTTP 200.

## Requisitos

- Java 17
- Maven

## Ejecutar

```bash
mvn clean spring-boot:run
```

Servidor en `http://localhost:8080`.

## Ejemplo de petición

```bash
curl -X POST http://localhost:8080/api/pagos/procesar \
  -H "Content-Type: application/json" \
  -d '{"clienteId": 12345, "monto": 569.30}'
```

## Respuesta

```json
{
  "estado": "APROBADO",
  "idTransaccion": "uuid",
  "clienteId": 12345,
  "monto": 569.30,
  "mensaje": "Pago procesado exitosamente",
  "timestamp": "2026-01-01T12:00:00Z"
}
```

## Health check

```bash
curl http://localhost:8080/api/pagos/health
```
