import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";

type MemberCardOptions = {
  count: number,
  title: string,
  Icon: React.ElementType
  backgroundColor: "yellow" | "blue" | "green" | "red"
}

const backgroundColorsMap = {
  yellow: "#f1c40f",
  blue: "#2980b9",
  green: "#27ae60",
  red: "#E74C3C"
}

export function MetricCard({ count, title, backgroundColor, Icon }: MemberCardOptions) {

  const classes = useStyles();

  return (
    <Grid
      item
      container
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      xs={12}
      md={3}
    >
      <Card
        variant="elevation"
        className={classes.indicator_card}
        style={{ backgroundColor: backgroundColorsMap[backgroundColor] }}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography fontSize={64} fontWeight="bold">
                {count}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              < Icon />
            </Grid>

          </Grid>
        </CardContent>
        <CardHeader title={title} />
      </Card>
    </Grid>)
}