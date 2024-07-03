import React from 'react';
import { Box, Stack, Divider } from '@mui/material';

const MuiStack = () => {
  return (
    <Stack sx={{border: '1px solid'}} direction={'row'} spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
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
          width: "200px",
          height: "200px",
          padding: 2,
        }}
      ></Box>
    </Stack>
  );
}

export default MuiStack;