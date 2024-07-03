import React from 'react';
import { Typography } from '@mui/material';


const MuiTypography = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h1">Lorem Ipsum h1 is simply dummy</Typography>
      <Typography variant="h2" gutterBottom>
        Lorem Ipsum h2 is simply dummy
      </Typography>
      <Typography variant="h3">Lorem Ipsum h3 is simply dummy</Typography>
      <Typography variant="h4">Lorem Ipsum h4 is simply dummy</Typography>
      <Typography variant="h5">Lorem Ipsum h5 is simply dummy</Typography>
      <Typography variant="h6">Lorem Ipsum h6 is simply dummy</Typography>
      <Typography variant="button">Lorem Ipsum h6 is simply dummy</Typography>
    </div>
  );
}

export default MuiTypography;
