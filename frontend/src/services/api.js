export const API_URL = 'http://localhost:8080';

export function USER_CREATE(body) {
  return {
    url: API_URL + '/register',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_LOGIN(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
