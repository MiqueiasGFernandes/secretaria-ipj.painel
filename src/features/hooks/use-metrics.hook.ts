import { useEffect, useState } from "react";
import { Metrics } from "@features/entities";
import { DashboardProvider } from "@services/dashboard-provider";

export function useMetrics() {
  const [metrics, setMetrics] = useState<Metrics>({
    totalMembers: 0,
    frequenters: 0,
    requests: 0,
    membersThatNotShareSelfImage: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const provider = new DashboardProvider();
    provider.fetchMetrics()
      .then(data => setMetrics({
        frequenters: data.frequenters,
        totalMembers: data.totalMembers,
        requests: data.newMembersRequests,
        membersThatNotShareSelfImage: data.membersThatNotShareSelfImage,
      }))
      .catch((error) => {
        if (error?.status === 401) {
          window.location.href = "/login"
        }
        setError(error)
      })
      .finally(() => setLoading(false));
  }, []);

  return { metrics, loading, error };
}
