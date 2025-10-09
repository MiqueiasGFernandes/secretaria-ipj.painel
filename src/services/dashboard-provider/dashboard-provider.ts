import axios from 'axios';

type MetricDto = {
  totalMembers: 0,
  frequenters: 0,
  newMembersRequests: 0
}

export class DashboardProvider {
  async fetchMetrics(): Promise<MetricDto> {
    const url = `${import.meta.env.VITE_API_URL}/dashboard`;
    const authorization = { authorization: `Bearer ${localStorage.getItem('token')}` };
    const { data } = await axios.get<MetricDto>(url, { headers: { ...authorization } });
    return data;  
  }
};

export default DashboardProvider;
