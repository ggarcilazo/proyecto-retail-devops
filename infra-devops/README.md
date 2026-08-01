# 📁 Módulo de Infraestructura, Contenedores y Scripts de Soporte Linux

Este subdirectorio almacena la configuración técnica necesaria para empaquetar, orquestar y dar soporte automatizado a los servidores de la plataforma retail.

## 🚀 Componentes Técnicos

1. **`Dockerfile`**: Archivo de empaquetado multi-etapa optimizado basado en una distribución **Linux Alpine** (ultra-ligera) para servir la interfaz web de Promart minimizando el consumo de hardware y memoria RAM.
2. **`k8s-despliegue.yml`**: Manifiesto oficial de orquestación de **Kubernetes**. Define un controlador de tipo `Deployment` encargado de mantener 2 réplicas idénticas en alta disponibilidad y un objeto `Service` tipo `NodePort` expuesto en el puerto local `30080` como balanceador de carga.
3. **`mantenimiento_servidor.sh`**: Script de automatización en **Linux Shell (Bash)** diseñado para tareas de soporte de TI. Monitorea que el espacio libre en el disco duro no sea menor al 10%, ejecuta búsquedas y limpiezas automáticas de archivos de log pesados mayores a 50MB, y exporta métricas en tiempo real del consumo de memoria RAM.

## 💻 Pasos de Ejecución Local

1. **Construir Contenedor:** Ingrese a esta carpeta y ejecute el comando para registrar la imagen en su motor local:
   ```bash
   docker build -t promart-retail:v1 .
   ```
2. **Orquestar en Kubernetes:** Asegúrese de tener activado el timón de Kubernetes en su Docker Desktop y aplique el manifiesto:
   ```bash
   kubectl apply -f k8s-despliegue.yml
   ```
3. **Verificar Estado:** Monitoree los Pods levantados ejecutando:
   ```bash
   kubectl get pods
   ```
