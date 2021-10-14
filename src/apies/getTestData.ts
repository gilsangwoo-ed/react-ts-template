import { request } from '.';

interface resGetTestData {
  test: string;
}

interface paramGetTestData {
  idx: string;
}

export default function getTestData(
  param: paramGetTestData,
): Promise<resGetTestData> {
  return request<resGetTestData, paramGetTestData>('get', '/test_data', param);
}
