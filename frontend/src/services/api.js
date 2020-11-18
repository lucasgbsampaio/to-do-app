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

export function TODOS_GET() {
  return {
    url: API_URL + '/todos',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      cache: 'no-store',
    },
  };
}

export function TODO_POST(data) {
  return {
    url: API_URL + '/add-todo',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(data),
    },
  };
}

export function TODO_PUT(data, id) {
  return {
    url: `${API_URL}/update-todo/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(data),
    },
  };
}

export function TODO_DELETE(id) {
  return {
    url: `${API_URL}/delete-todo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}
