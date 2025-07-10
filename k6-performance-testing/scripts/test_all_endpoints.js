import { sleep } from 'k6';

import { test_list_users as listUsers } from './test_list_users.js';
import { test_single_user as singleUser } from './test_single_user.js';
import { test_create_user as createUser } from './test_create_user.js';
import { test_update_user as updateUser } from './test_update_user.js';
import { test_delete_user as deleteUser } from './test_delete_user.js';

export let options = {
  vus: 1,
  iterations: 1,
  thresholds: {
    http_req_duration: ['p(95)<800'],
    checks: ['rate>0.9'],
  },
};

export default function () {
  console.log('Running List Users tests...');
  listUsers();
  sleep(1);

  console.log('Running Single User tests...');
  singleUser();
  sleep(1);

  console.log('Running Create User tests...');
  createUser();
  sleep(1);

  console.log('Running Update User tests...');
  updateUser();
  sleep(1);

  console.log('Running Delete User tests...');
  deleteUser();
  sleep(1);
}
