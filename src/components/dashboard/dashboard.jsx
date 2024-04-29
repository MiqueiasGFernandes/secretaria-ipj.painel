import {
  Card, CardContent, CardHeader, Grid, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import dashboardService from '../../services/dashboard-provider/dashboard-service';

import useStyles from './styles';

export default function Dashboard() {
  const [count, setCount] = useState({
    totalMembers: 0,
    frequenters: 0,
  });

  const classes = useStyles();

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
      className={classes.container}
      container
      xs={12}
    >
      <Grid item xs={12} md={6}>
        <Card
          variant="elevation"
          className={`${classes.indicator_card} ${classes.indicator_card_blue}`}
        >
          <div className={`${classes.indicator_bg} ${classes.indicator_bg_members}`}>
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
          className={[classes.indicator_card, classes.indicator_card_green].join(' ')}
        >
          <div className={[classes.indicator_bg, classes.indicator_bg_freq].join(' ')}>
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
