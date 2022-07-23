import { ACCESS_TOKEN } from './constants';

const baseUrl = process.env.REACT_APP_SERVER ?? 'http://localhost:8080';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
};

const getHeader = () => {
  headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
  return headers;
};

type RequestData = { [key: string]: string | number };

const fetchApi = {
  get: (path: string): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'GET',
      mode: 'cors',
      headers: getHeader(),
    }),

  post: (path: string, data: RequestData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'POST',
      mode: 'cors',
      headers: getHeader(),
      body: JSON.stringify(data),
    }),

  postFile: (path: string, data: FormData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'POST',
      mode: 'cors',
      headers: getHeader(),
      body: data,
    }),

  put: (path: string, data: RequestData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'PUT',
      mode: 'cors',
      headers: getHeader(),
      body: JSON.stringify(data),
    }),

  patch: (path: string, data: RequestData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: getHeader(),
      body: JSON.stringify(data),
    }),

  delete: (path: string, data?: RequestData): Promise<Response> =>
    fetch(`${baseUrl}${path}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: getHeader(),
      body: JSON.stringify(data),
    }),
};

export default fetchApi;
