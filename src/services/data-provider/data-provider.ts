import axios from 'axios';
import type { DataProvider, GetListResult } from 'ra-core';

function checkError(error: any) {
  switch (error.response.status) {
    case 401:
      localStorage.removeItem('token');
      localStorage.removeItem('permissions');

      window.location.href = '/';
      return;
    default:
      return Promise.reject(error.response.data.message);
  }
}

export const dataProvider: DataProvider = {
  getList: async (resource, params): Promise<GetListResult<any>> => {
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };

    const urlParams: string[] = [];

    Object.keys(params).forEach((option) => {
      if (params[option] && params[option] !== 'sort') {
        Object.keys(params[option]).forEach((optionName) => {
          urlParams.push(`${optionName}=${params[option][optionName]}`);
        });
      }
    });

    const url = `${process.env.REACT_APP_API_URL}/${resource}?${urlParams.join('&')}`;
    const response = await axios.get(url, { ...params, headers: { ...authorization } });
    const { data, total } = response.data;
    return Promise.resolve({ data, total });
  },

  getOne: async (resource, params) => {
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };

    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      const response = await axios.get(url, { headers: { ...authorization } });
      const { data } = response;
      return Promise.resolve({ data });
    } catch (error) {
      return checkError(error);
    }
  },

  create: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}`;
    try {
      const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };
      const response = await axios.post(url, params.data, { headers: { ...authorization } });
      const { data } = response.data;
      return Promise.resolve({ data });
    } catch (error) {
      return checkError(error);
    }
  },

  update: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };
      const response = await axios.patch(url, params.data, { headers: { ...authorization } });
      const { data } = response.data;
      return Promise.resolve({ data });
    } catch (error) {
      return checkError(error);
    }
  },

  delete: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };
      await axios.delete(url, { headers: { ...authorization } });
      return Promise.resolve({ data: params.previousData });
    } catch (error) {
      return checkError(error);
    }
  },
};