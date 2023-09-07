import { AxiosResponse } from "axios";
import api from "@shared/api/ens/base";
import {
  DeleteRequestFunction,
  GetRequestFunction,
  PostRequestFunction,
  PutRequestFunction,
  ResponseData
} from "@shared/api/ens/models";

export const getRequest: GetRequestFunction = async (url, params, authorization): Promise<ResponseData> => {
  const response: AxiosResponse<ResponseData> = await api(authorization).get(url, { params });
  return response?.data;
};

export const postRequest: PostRequestFunction = async (url, data, authorization): Promise<ResponseData> => {
  const response: AxiosResponse<ResponseData> = await api(authorization).post(url, data);
  return response?.data;
};

export const putRequest: PutRequestFunction = async (url, data, authorization): Promise<ResponseData> => {
  const response: AxiosResponse<ResponseData> = await api(authorization).put(url, data);
  return response?.data;
};

export const deleteRequest: DeleteRequestFunction = async (url, params, authorization): Promise<ResponseData> => {
  const response: AxiosResponse<ResponseData> = await api(authorization).delete(url, { params });
  return response?.data;
};
