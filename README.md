# proyecto-retail-devops

Plataforma de microservicios retail y pipeline DevOps multi-cloud (Proyecto 2).

## Estructura

- `frontend-angular/` - Carrito de compras (Angular 17/18) - Compañero B
- `backend-java-pagos/` - Microservicio de pagos (Java Spring Boot) - Compañero B
- `performance-tests/` - Pruebas de carga k6/JMeter (500 VU) - Compañero B
- `infra-devops/` - Infraestructura y automatización - Compañero A
  - `mantenimiento_servidor.sh` - Limpieza de logs, control de disco y alertas de RAM
  - `Dockerfile` - Contenedor Nginx Alpine de los Canales Digitales
  - `k8s-despliegue.yml` - Despliegue Kubernetes (2 réplicas, NodePort 30080)
- `.github/workflows/deploy.yml` - Pipeline CI/CD integral (infra + backend + frontend + k6)

## Infraestructura Docker + Kubernetes

```bash
# 1. Compilar la imagen del contenedor
docker build -t promart-retail:v1 ./infra-devops/

# 2. Levantar el cluster en Kubernetes (2 réplicas balanceadas)
kubectl apply -f infra-devops/k8s-despliegue.yml

# 3. Probar en el navegador
http://localhost:30080
```

## Automatización Linux

```bash
chmod +x infra-devops/mantenimiento_servidor.sh
./infra-devops/mantenimiento_servidor.sh
```

## CI/CD

Cada push a `main` dispara `.github/workflows/deploy.yml`:
1. Valida sintaxis del script bash y compila el contenedor Docker.
2. Compila y valida el backend Java (Maven test).
3. Compila el frontend Angular (ng build).
4. Ejecuta la prueba de carga k6 contra la API de pagos.
