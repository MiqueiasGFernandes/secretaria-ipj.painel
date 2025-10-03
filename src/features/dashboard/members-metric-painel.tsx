import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import { MetricCard } from "@components/metric-card";
import { FrequentersIcon, MembersIcon, RequestsPendingIcon } from "@components/icons";


type TotalCounters = {
  totalMembers: number,
  frequenters: number,
  requests: number,
}


export function MembersMetricPainel({ count }: { count: TotalCounters }) {
  const classes = useStyles()

  return <>
    <Grid
      spacing={{ xs: 2, md: 6 }}
      className={classes.container}
      container
      xs={12}
    >
      <MetricCard
        count={count.totalMembers}
        title="Total de Memberos"
        Icon={MembersIcon}
      />
      <MetricCard
        count={count.frequenters}
        title="Frequentantes"
        Icon={FrequentersIcon}
      />
      <MetricCard
        count={count.requests}
        title="Solicitações"
        Icon={RequestsPendingIcon}
      />
    </Grid>
  </>
}