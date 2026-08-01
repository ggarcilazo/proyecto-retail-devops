# 🛒 Proyecto 2: Plataforma de Microservicios Retail y Pipeline DevOps Multi-Cloud

Este proyecto simula el entorno de infraestructura, automatización y despliegue continuo de una gran corporación de comercio electrónico y retail (estilo Promart). El objetivo principal es migrar canales digitales locales hacia una arquitectura contenerizada de alta disponibilidad utilizando orquestadores y pipelines automatizados en la nube de forma serverless.

---

## 🏗️ Arquitectura Técnica de Contenedores y Flujo CI/CD

<img width="1183" height="1329" alt="Arquitecutra" src="https://github.com/user-attachments/assets/9f087d08-d0ad-40c8-bbfa-f9b58a01f503" />


---

## 🛠️ Estructura del Portafolio y Componentes

El proyecto se divide en módulos especializados para simular un flujo de trabajo real entre las celdas de DevOps y Desarrollo:

*   **📁 `infra-devops/` (Tus Entregables):** Contiene la lógica de empaquetado en contenedores de Docker, la orquestación y balanceo de carga en un clúster local de Kubernetes, y los scripts automatizados de mantenimiento de servidores en Bash.
*   **📁 `.github/workflows/` (Tu Automatización Nube):** Pipeline serverless de integración continua (CI/CD) que valida la sintaxis y compila el proyecto de forma automática en los servidores de GitHub con cada subida de código.
*   **📁 `frontend-angular/` (Módulo de tu Compañero):** Código de la interfaz de usuario de canales digitales que simula la vista del carrito de compras de la tienda retail.
*   **📁 `backend-java-pagos/` (Módulo de tu Compañero):** Microservicio transaccional e independiente encargado de procesar y validar las intenciones de pago de la plataforma web.
*   **📁 `performance-tests/` (Módulo de tu Compañero):** Scripts de automatización de pruebas de carga de nivel industrial redactados en **k6** para simular escenarios de alta concurrencia masiva (Cyber Days).

---

## 📸 Evidencias del Éxito del Proyecto

### 🚀 Pipeline CI/CD Ejecutado Exitosamente en la Nube
*Validación automática de la sintaxis del script de Bash y compilación exitosa del contenedor Docker de forma serverless en GitHub Actions.*

[COLOCA AQUÍ TU CAPTURA DEL CHECK VERDE DE GITHUB ACTIONS]
Ejemplo: `<img src="RUTA_DE_TU_IMAGEN_AQUÍ" width="100%"/>`

### ☸️ Clúster de Kubernetes en Alta Disponibilidad (2 Réplicas Activas)
*Demostración del comando `kubectl get pods` corriendo localmente sobre Docker Desktop, confirmando los dos Pods balanceados en estado Running.*

<img width="2879" height="1699" alt="Captura de pantalla 2026-08-01 164645" src="https://github.com/user-attachments/assets/2b5cb11b-eb00-46cb-acbe-31b31dcbc7c9" />

---
## 👥 Colaboradores
*   **Giovanni Joaquín Garcilazo Lopez** (`ggarcilazo`) - Ingeniero Cloud DevOps & Automatización de Infraestructura.
*   **Hector Jose Caballero Babilonia** (`Yunibasu1`) - Desarrollador Full-Stack & QA Automation Engineer.

