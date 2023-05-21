import axios from 'axios';

const authProvider = {
  register: async ({ name, email, password }) => {
    const url = `${process.env.REACT_APP_LOGIN_URL}/register`;
    try {
      await axios.post(url, { name, email, password });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  login: async ({ username, password }) => {
    const url = `${process.env.REACT_APP_LOGIN_URL}/login`;
    try {
      const response = await axios.post(url, { email: username, password }, {
        headers: {
          'X-CSRF-TOKEN': 'any',
        },
      });
      const { access_token } = response.data;
      localStorage.setItem('token', access_token);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error.response.message);
    }
  },

  logout: async () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },

  checkAuth: () => {
    const token = localStorage.getItem('token');
    return token ? Promise.resolve() : Promise.reject();
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      window.location.href = '/login';
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getAccessToken: () => {
    const token = localStorage.getItem('token');
    return Promise.resolve(token);
  },
};

export default authProvider;
