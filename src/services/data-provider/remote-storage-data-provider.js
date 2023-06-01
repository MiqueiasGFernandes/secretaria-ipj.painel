import axios from 'axios';

const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };

const dataProvider = {
  getList: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}`;
    try {
      const response = await axios.get(url, { ...params, headers: { ...authorization } });
      const { data, total } = response.data;
      return Promise.resolve({ data, total });
    } catch (error) {
      return Promise.reject(error.response.data.message);
    }
  },

  getOne: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      const response = await axios.get(url, { headers: { ...authorization } });
      const { data } = response;
      return Promise.resolve({ data });
    } catch (error) {
      return Promise.reject(error.response.data.message);
    }
  },

  create: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}`;
    try {
      const response = await axios.post(url, params.data, { headers: { ...authorization } });
      const { data } = response.data;
      return Promise.resolve({ data });
    } catch (error) {
      return Promise.reject(error.response.data.message);
    }
  },

  update: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      const response = await axios.patch(url, params.data, { headers: { ...authorization } });
      const { data } = response.data;
      return Promise.resolve({ data });
    } catch (error) {
      return Promise.reject(error.response.data.message);
    }
  },

  delete: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      await axios.delete(url, { headers: { ...authorization } });
      return Promise.resolve({ data: params.previousData });
    } catch (error) {
      return Promise.reject(error.response.data.message);
    }
  },
};

export default dataProvider;
