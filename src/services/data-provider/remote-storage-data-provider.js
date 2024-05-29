/* eslint-disable consistent-return */
import axios from 'axios';

function checkError(error) {
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

const dataProvider = {
  getList: async (resource, params) => {
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };

    const urlParams = [`sortBy=${params.sort.field}`, `sortDirection=${params.sort.order}`];

    Object.keys(params).forEach((option) => {
      if (params[option] && params[option] !== 'sort') {
        Object.keys(params[option]).forEach((optionName) => {
          urlParams.push(`${optionName}=${params[option][optionName]}`);
        });
      }
    });

    const url = `${process.env.REACT_APP_API_URL}/${resource}?${urlParams.join('&')}`;
    try {
      const response = await axios.get(url, { ...params, headers: { ...authorization } });
      const { data, total } = response.data;
      return Promise.resolve({ data, total });
    } catch (error) {
      return checkError(error);
    }
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

export default dataProvider;
