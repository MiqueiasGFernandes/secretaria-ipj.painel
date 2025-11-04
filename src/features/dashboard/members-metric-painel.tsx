import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import { MetricCard } from "@components/metric-card";
import { FrequentersIcon, MembersIcon, RequestsPendingIcon, NotShareSelfImageIcon } from "@components/icons";


type TotalCounters = {
  totalMembers: number,
  frequenters: number,
  requests: number,
  membersThatNotShareSelfImage: number
}


export function MembersMetricPainel({ count }: { count: TotalCounters }) {
  const classes = useStyles()

  return <Grid
    className={classes.container}
    container
    spacing={{ xs: 1, md: 2 }}
  >
    <MetricCard
      count={count.totalMembers}
      title="Total de Membros"
      Icon={MembersIcon}
      backgroundColor="blue"
    />
    <MetricCard
      count={count.frequenters}
      title="Frequentantes"
      Icon={FrequentersIcon}
      backgroundColor="green"
    />
    <MetricCard
      count={count.requests}
      title="Solicitações Pendentes"
      Icon={RequestsPendingIcon}
      backgroundColor="yellow"
    />
    <MetricCard
      count={count.membersThatNotShareSelfImage}
      title="Imagem Restrita"
      Icon={NotShareSelfImageIcon}
      backgroundColor="red"
    />
  </Grid>
}