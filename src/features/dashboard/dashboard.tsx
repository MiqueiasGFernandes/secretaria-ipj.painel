import { useMetrics } from "@features/hooks";
import { MembersMetricPainel } from "./members-metric-painel";
import { useRedirect } from "ra-core";

export function Dashboard() {
  const { metrics, loading, error } = useMetrics();
  const redirect = useRedirect()

  if (loading) return <p>Carregando métricas...</p>;
  if (error) return <p>Erro ao carregar métricas.</p>;
  if (error && (error as any)?.status === 401) {
    redirect("/login")
  }

  return <MembersMetricPainel count={metrics} />;
}
