import { useEffect, useState } from 'react';

export function Dashboard() {
  const [count, setCount] = useState({
    totalMembers: 0,
    frequenters: 0,
    requests: 0,
  });


  useEffect(() => {
    new RemoteDashboardProvider()
      .fetchMetrics()
      .then((data) => {
        setCount({
          frequenters: data.frequenterMembers,
          totalMembers: data.totalMembers,
          requests: data.requests,
        });
      });
  }, []);

  return (
    <>
      <MembersMetricPainel count={count} />
    </>
  );
}
