import axios from 'axios';
import type { DataProvider, DeleteManyParams, DeleteManyResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, RaRecord, UpdateManyParams, UpdateManyResult } from 'ra-core';

export const dataProvider: DataProvider = {
  getList: async (resource, params: GetListParams): Promise<GetListResult<any>> => {
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };

    const urlParams: string[] = [];

    Object.keys(params).forEach((option) => {
      if (params[option as keyof GetListParams] && params[option as keyof GetListParams] !== 'sort') {
        Object.keys(params[option as keyof GetListParams]).forEach((optionName) => {
          urlParams.push(`${optionName}=${params[option as keyof GetListParams][optionName]}`);
        });
      }
    });

    const url = `${import.meta.env.VITE_LOGIN_URL}/${resource}?${urlParams.join('&')}`;
    const response = await axios.get(url, { ...params, headers: { ...authorization } });
    return response.data;
  },

  getOne: async (resource, params) => {
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };

    const url = `${import.meta.env.VITE_API_URL}/${resource}/${params.id}`;
    const response = await axios.get(url, { headers: { ...authorization } });
    const { data } = response;
    return { data };
  },

  create: async (resource, params) => {
    const url = `${import.meta.env.VITE_API_URL}/${resource}`;
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };
    const response = await axios.post(url, params.data, { headers: { ...authorization } });
    const { data } = response.data;
    return { data };
  },

  update: async (resource, params) => {
    const url = `${import.meta.env.VITE_API_URL}/${resource}/${params.id}`;
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };
    const response = await axios.patch(url, params.data, { headers: { ...authorization } });
    const { data } = response.data;
    return { data }
  },
  delete: async (resource, params) => {
    const url = `${import.meta.env.VITE_API_URL}/${resource}/${params.id}`;
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };
    await axios.delete(url, { headers: { ...authorization } });
    return { data: params.previousData as any };
  },
  getMany: function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams): Promise<GetManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  getManyReference: function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  updateMany: function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  deleteMany: function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  }
};