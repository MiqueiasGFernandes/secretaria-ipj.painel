import remoteDashboardProvider from './remote-dashboard-provider';

const dashboardService = {
  getData: () => remoteDashboardProvider.getData(),
};

export default dashboardService;
