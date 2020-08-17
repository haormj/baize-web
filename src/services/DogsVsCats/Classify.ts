import { request } from 'umi';

export interface ClassifyInputType {
  object_key: string;
}

export interface ClassifyOutputType {
  result: string;
  image_url: string;
}

export function Classify(input: ClassifyInputType) {
  return request<ClassifyOutputType>('/DogsVsCatsService/Classify', {
    method: 'POST',
    timeout: 10 * 1000,
    data: input,
  });
}
