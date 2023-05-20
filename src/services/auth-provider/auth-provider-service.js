import remoteAuthProvider from './remote-auth-provider';

const authService = {
  login: (data) => remoteAuthProvider.login(data),

  logout: () => remoteAuthProvider.logout(),

  checkAuth: () => remoteAuthProvider.checkAuth(),

  checkError: (data) => remoteAuthProvider.checkError(data),

  getAccessToken: () => remoteAuthProvider.getAccessToken(),

  register: (data) => remoteAuthProvider.register(data),
};

export default authService;
