export const API_BASE_URL = 'https://mcapp-api.herokuapp.com/api/v1/';

export const getAPIUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN = getAPIUrl('users/login');
export const SIGNUP = getAPIUrl('users/signup');
