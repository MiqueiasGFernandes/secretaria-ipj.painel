import {
  Card, CardContent, CardHeader, Grid, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import dashboardService from '../../services/dashboard-provider/dashboard-service';

import styles from './styles';

export default function Dashboard() {
  const [count, setCount] = useState({
    totalMembers: 0,
    frequenters: 0,
  });

  useEffect(() => {
    dashboardService.getData()
      .then((data) => {
        setCount({
          frequenters: data.frequenterMembers,
          totalMembers: data.totalMembers,
        });
      });
  }, []);

  return (
    <Grid
      spacing={{ xs: 2, md: 6 }}
      className={styles.container}
      container
      xs={12}
    >
      <Grid item xs={12} md={6}>
        <Card
          variant="elevation"
          className={styles.indicator.card}
        >
          <div className={styles.indicator.bg}>
            <CardContent>
              <Typography fontSize={64} fontWeight="bold">
                {count.totalMembers}
              </Typography>
            </CardContent>
            <CardHeader title="Membros" />
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          variant="elevation"
          className={styles.indicator.card}
        >
          <div className={styles.indicator.bg}>
            <CardContent>
              <Typography fontSize={64} fontWeight="bold">
                {count.frequenters}
              </Typography>
            </CardContent>
            <CardHeader title="Frequentantes" />
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
