import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 500,          // 500 Usuarios Virtuales Simultáneos
    duration: '30s',   // Durante 30 segundos continuos
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<200']
    }
};

const API_URL = __ENV.API_URL || 'http://localhost:8080'; // Puerta del microservicio de pagos

export default function () {
    const url = `${API_URL}/api/pagos/procesar`;
    const payload = JSON.stringify({
        clienteId: 204593,
        monto: 189.90
    });

    const params = {
        headers: { 'Content-Type': 'application/json' },
    };

    const res = http.post(url, payload, params);

    // Valida que el sistema responda rápido y sin errores 500
    check(res, {
        'Código HTTP es 200': (r) => r.status === 200,
        'Tiempo de respuesta < 200ms': (r) => r.timings.duration < 200,
    });

    sleep(0.1); // Pequeña pausa entre peticiones
}
