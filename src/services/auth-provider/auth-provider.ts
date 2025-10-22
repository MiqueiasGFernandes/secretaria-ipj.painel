import axios from 'axios';
import type { UserEntity, AuthCredentialEntity } from '@features/entities';
import { AuthProvider } from 'ra-core';

export const authProvider: AuthProvider = {
  register: async (user: UserEntity) => {
    const url = `${import.meta.env.VITE_LOGIN_URL}/register`;
    await axios.post(url, user);
  },

  login: async ({ username: email, password }: AuthCredentialEntity) => {
    try {
      const url = `${import.meta.env.VITE_LOGIN_URL}/login`;
      const response = await axios.post(url, {
        email,
        password
      });
      const { access_token } = response.data;
      localStorage.setItem('token', access_token);
      localStorage.setItem('permissions', 'admin');
      return Promise.resolve();
    } catch (error: any) {
      if (error.response.status === 429) {
        console.error(error)
        return Promise.reject(
          "Limite máximo de solicitações atingido. Tente novamente mais tarde",
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

  getPermissions: (_params: unknown): Promise<string> => {
    const role = localStorage.getItem('permissions');
    return Promise.resolve(role || 'guest');
  },
};
