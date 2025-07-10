import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'https://reqres.in/api';
const API_KEY = __ENV.API_KEY || '';

export let options = {
  vus: 5,
  duration: '15s',
  thresholds: {
    http_req_duration: ['p(95)<800'],
    checks: ['rate>0.9'],
  },
};

export function test_update_user() {
  let payload = JSON.stringify({
    name: 'morpheus',
    job: 'zion resident',
  });

  let res = http.put(`${BASE_URL}/users/2`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response has updatedAt': (r) => r.json('updatedAt') !== undefined,
  });

  sleep(1);
}
