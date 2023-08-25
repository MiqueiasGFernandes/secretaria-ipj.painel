import React from 'react';
import { Typography, Divider } from '@mui/material';

function SectionTitle({ children }) {
  return (
    <>
      <Typography variant="h5" component="h2" style={{ marginTop: 20, marginBottom: 10 }}>
        {children}
      </Typography>
      <Divider style={{ marginBottom: 40 }} />
    </>
  );
}

export default SectionTitle;
