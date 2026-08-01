import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    cyber_days: {
      executor: 'constant-vus',
      vus: 500,
      duration: '30s'
    }
  },
  thresholds: {
    http_req_duration: ['p(95)<200'],
    http_req_failed: ['rate<0.01']
  }
};

const BASE_URL = __ENV.API_URL || 'http://localhost:8080';

export default function () {
  const payload = JSON.stringify({
    clienteId: 12345,
    monto: (Math.random() * 1000 + 10).toFixed(2)
  });

  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = http.post(`${BASE_URL}/api/pagos/procesar`, payload, params);

  check(res, {
    'status es 200': (r) => r.status === 200,
    'respuesta en menos de 200ms': (r) => r.timings.duration < 200
  });

  sleep(0.1);
}
