import { request } from 'umi';

export interface GetUploadParamInputType {}

export interface GetUploadParamOutputType {
  region_id: string;
  bucket: string;
  access_key_id: string;
  access_key_secert: string;
  security_token: string;
  expiration: string;
  object_key: string;
}

export async function GetUploadParam(input: GetUploadParamInputType) {
  return request<GetUploadParamOutputType>('/DogsVsCatsService/GetUploadParam', {
    method: 'POST',
    data: input,
  });
}
