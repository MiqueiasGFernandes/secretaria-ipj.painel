import axios from 'axios';

const dataProvider = {
  getList: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}`;
    try {
      const response = await axios.get(url, { params });
      const { data, total } = response.data;
      return Promise.resolve({ data, total });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getOne: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      const response = await axios.get(url);
      const { data } = response.data;
      return Promise.resolve({ data });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  create: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}`;
    try {
      const response = await axios.post(url, params.data);
      const { data } = response.data;
      return Promise.resolve({ data });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  update: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      const response = await axios.patch(url, params.data);
      const { data } = response.data;
      return Promise.resolve({ data });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  delete: async (resource, params) => {
    const url = `${process.env.REACT_APP_API_URL}/${resource}/${params.id}`;
    try {
      await axios.delete(url);
      return Promise.resolve({ data: params.previousData });
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default dataProvider;
