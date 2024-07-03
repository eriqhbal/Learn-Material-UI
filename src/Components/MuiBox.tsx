import React from 'react';
import { Box } from '@mui/material';

const MuiBox = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "200px",
          height: "200px",
          color: "#9BEC00",
          bgcolor: "#55AD9B",
          padding: 2,
          textAlign: "center",
        }}
      >
        Zuleriqhbal Hendri
      </Box>
      <Box
        sx={{
          backgroundColor: "#E7D37F",
          width: '200px',
          height: '200px',
          padding: 2,
        }}
      ></Box>
    </React.Fragment>
  );
}

export default MuiBox