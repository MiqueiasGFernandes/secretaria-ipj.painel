import remoteAuthProvider from './remote-auth-provider';

const authService = {
  login: (data) => remoteAuthProvider.login(data),

  logout: (data) => remoteAuthProvider.logout(data),

  checkAuth: (data) => remoteAuthProvider.checkAuth(data),

  checkError: (data) => remoteAuthProvider.checkError(data),

  getAccessToken: (data) => remoteAuthProvider.getAccessToken(data),

  getPermissions: (data) => remoteAuthProvider.getPermissions(data),

  register: (data) => remoteAuthProvider.register(data),
};

export default authService;
