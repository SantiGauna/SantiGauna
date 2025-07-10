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

export function test_create_user() {
  let payload = JSON.stringify({
    name: 'morpheus',
    job: 'leader',
  });

  let res = http.post(`${BASE_URL}/users`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
  });

  check(res, {
    'status is 201': (r) => r.status === 201,
    'response has id': (r) => r.json('id') !== undefined,
  });

  sleep(1);
}
