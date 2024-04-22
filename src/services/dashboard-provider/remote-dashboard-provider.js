import axios from 'axios';

const remoteDashboardProvider = {
  async getData() {
    const url = `${process.env.REACT_APP_API_URL}/dashboard`;
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };
    const { data } = await axios.get(url, { headers: { ...authorization } });
    return Promise.resolve(data);
  },
};

export default remoteDashboardProvider;
