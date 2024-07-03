import React from 'react';
import { Box, Grid } from '@mui/material';

const MuiGrid = () => {
  return (
    <React.Fragment>
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6} sm={2} md={5}>
          <Box sx={{ backgroundColor: "#C8CFA0", height: "200px" }}></Box>
        </Grid>
        <Grid item xs={6} sm={7} md={2}>
          <Box sx={{ backgroundColor: "#81A263", height: "200px" }}></Box>
        </Grid>
        <Grid item xs={3} sm={2} md={3}>
          <Box sx={{ backgroundColor: "#55AD9B", height: "200px" }}></Box>
        </Grid>
        <Grid item xs={3} sm={4} md={2}>
          <Box sx={{ backgroundColor: "#80B9AD", height: "200px" }}>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MuiGrid;