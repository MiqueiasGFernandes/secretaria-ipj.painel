import {
  Card, CardContent, CardHeader, Grid, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import dashboardService from '../../services/dashboard-provider/dashboard-service';

import frequentIcon from '../../assets/icons/frequent.svg';
import memberIcon from '../../assets/icons/members.svg';

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
      style={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      container
      xs={12}
    >
      <Grid item xs={12} md={6}>
        <Card
          variant="elevation"
          style={{
            backgroundColor: 'blue',
            color: 'whitesmoke',
            paddingRight: 15,
          }}
        >
          <div style={{
            backgroundImage: `url(${memberIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center right',
            backgroundSize: '20%',
          }}
          >
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
          style={{
            backgroundColor: 'green',
            color: 'whitesmoke',
            backgroundImage: frequentIcon,
            paddingRight: 15,
          }}
        >
          <div style={{
            backgroundImage: `url(${frequentIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center right',
            backgroundSize: '20%',
          }}
          >
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
