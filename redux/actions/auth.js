import {LOGIN, SIGNUP} from '../../config/urls';
import {apiPost} from '../../utils/utils';

export function login(data) {
  return apiPost(LOGIN, data);
}

export function signup(data) {
  return apiPost(SIGNUP, data);
}
