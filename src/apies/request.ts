import { of } from 'await-of';
import axios, { AxiosResponse, Method } from 'axios';

const api = axios.create({
  baseURL: '/',
});

export default async function request<R, P extends unknown>(
  method: Method,
  url: string,
  params?: P,
): Promise<R> {
  const [res, err] = await of(
    api.request<R>({
      method,
      url,
      params,
    }),
  );
  if (err) {
    throw err;
  }
  const { data } = res as AxiosResponse<R>;
  return data;
}
