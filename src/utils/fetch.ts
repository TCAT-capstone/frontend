const baseUrl = process.env.REACT_APP_SERVER ?? 'http://localhost:3000';

const headers = {
  'Content-Type': 'application/json',
};

type RequestData = { [key: string]: string | number };

const fetchApi = {
  get: (path: string): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'GET',
      mode: 'cors',
      headers,
    }),

  post: (path: string, data: RequestData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify(data),
    }),

  put: (path: string, data: RequestData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'PUT',
      mode: 'cors',
      headers,
      body: JSON.stringify(data),
    }),

  patch: (path: string, data: RequestData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'PATCH',
      mode: 'cors',
      headers,
      body: JSON.stringify(data),
    }),

  delete: (path: string, data?: RequestData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'DELETE',
      mode: 'cors',
      headers,
      body: JSON.stringify(data),
    }),
};

export default fetchApi;
