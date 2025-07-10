import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'https://reqres.in/api';
const API_KEY = __ENV.API_KEY || '';

export let options = {
  vus: 10,
  duration: '20s',
  thresholds: {
    http_req_duration: ['p(95)<800'],
    checks: ['rate>0.9'],
  },
};

export function test_list_users() {
  let res = http.get(`${BASE_URL}/users?page=2`, {
    headers: { 'x-api-key': API_KEY },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'has users data': (r) => r.json('data').length > 0,
  });

  sleep(1);
}
