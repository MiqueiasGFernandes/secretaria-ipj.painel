import axios from 'axios';

type MetricDto = {
  totalMembers: number,
  frequenters: number,
  newMembersRequests: number,
  membersThatNotShareSelfImage: number
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
