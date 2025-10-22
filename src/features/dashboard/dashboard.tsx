import { useMetrics } from "@features/hooks";
import { MembersMetricPainel } from "./members-metric-painel";

export function Dashboard() {
  const { metrics, loading, error } = useMetrics();

  if (loading) return <p>Carregando métricas...</p>;
  if (error) return <p>Erro ao carregar métricas.</p>;

  return <MembersMetricPainel count={metrics} />;
}
