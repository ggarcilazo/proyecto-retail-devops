#!/bin/bash
echo "=== INICIANDO SCRIPT DE SOPORTE TI Y MANTENIMIENTO ==="

# 1. Monitorear el espacio en disco duro (Tus 40GB libres)
ESPACIO_DISCO=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
echo "Uso actual del disco duro: $ESPACIO_DISCO%"

if [ "$ESPACIO_DISCO" -gt 90 ]; then
    echo "[ALERTA] El espacio en disco es crítico. Eliminando archivos temporales..."
    # Simulación de limpieza de archivos .log pesados mayores a 50MB
    find /var/log -name "*.log" -type f -size +50M -delete
    echo "[OK] Limpieza automática de logs completada."
else
    echo "[OK] Espacio en disco dentro de los rangos normales."
fi

# 2. Monitorear el consumo de memoria RAM
echo "Registrando métricas de consumo de RAM..."
free -m > reporte_consumo_ram.txt
echo "[OK] Reporte 'reporte_consumo_ram.txt' generado con éxito."
