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
      const response = await axios.post(url, { email: username, password });
      const { access_token } = response.data;
      localStorage.setItem('token', access_token);
      localStorage.setItem('permissions', 'admin');
      return Promise.resolve();
    } catch (error) {
      if (error.response.status === 429) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(
          'Limite máximo de solicitações atingido. Tente novamente mais tarde',
        );
      }
      return Promise.reject(error.response.message);
    }
  },

  logout: async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    return Promise.resolve();
  },

  checkAuth: (data) => {
    if (data.isGuest) {
      return Promise.resolve();
    }
    const isAuth = localStorage.getItem('token');
    return isAuth ? Promise.resolve() : Promise.reject();
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

  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role || 'guest';
  },
};

export default authProvider;
