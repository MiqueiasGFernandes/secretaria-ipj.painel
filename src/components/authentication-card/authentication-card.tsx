import { Lock as LockIcon } from '@mui/icons-material';
import { Avatar, Card, SxProps, Theme } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";
import { theme } from 'styles/theme';

export type AuthenticationCardOptions = {
  children: React.ReactNode
  styles?: SxProps<Theme>
}


export function AuthenticationCard({ children, styles }: AuthenticationCardOptions) {
  const classes = useStyles()

  return <Card sx={{ ...styles, pb: 2 }} >
    <div className={classes.avatar}>
      <Avatar sx={{ backgroundColor: theme.palette.primary.main }}>
        <LockIcon color='secondary' />
      </Avatar>
    </div>
    {children}
  </ Card>
}