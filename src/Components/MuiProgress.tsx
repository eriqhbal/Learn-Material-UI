import React from 'react';
import { CircularProgress, Stack, LinearProgress } from '@mui/material';

const MuiProgress = () => {
  return (
    <React.Fragment>
      <Stack direction="row" spacing={2}>
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={68} />
      </Stack>

      <Stack spacing={2} marginTop={4}>
        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={68} />
      </Stack>
    </React.Fragment>
  );
}

export default MuiProgress;