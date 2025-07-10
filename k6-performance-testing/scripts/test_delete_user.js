import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'https://reqres.in/api';
const API_KEY = __ENV.API_KEY || '';

export let options = {
  vus: 5,
  duration: '10s',
  thresholds: {
    http_req_duration: ['p(95)<800'],
    checks: ['rate>0.9'],
  },
};

export function test_delete_user() {
  let res = http.del(`${BASE_URL}/users/2`, null, {
    headers: { 'x-api-key': API_KEY },
  });

  check(res, {
    'status is 204': (r) => r.status === 204,
  });

  sleep(1);
}
