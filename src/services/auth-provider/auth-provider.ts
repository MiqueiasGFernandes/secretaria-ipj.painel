import axios from 'axios';
import env from 'env-var';
import type { UserEntity, AuthCredential } from '../../features/entities';

export const authProvider = {
  register: async (user: UserEntity) => {
    const url = `${env.get("LOGIN_URL").asString()}/register`;
    await axios.post(url, user);
  },

  login: async (credentials: AuthCredential) => {
    const url = `${env.get("LOGIN_URL").asString()}/login`;
    try {
      const response = await axios.post(url, credentials);
      const { access_token } = response.data;
      localStorage.setItem('token', access_token);
      localStorage.setItem('permissions', 'admin');
      return Promise.resolve();
    } catch (error) {
      if (error.response.status === 429) {
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
