import React from 'react';
import { Box, styled } from '@mui/material';

const BoxStyled = styled(Box)(({ theme }) => ({
   height: '250px',
   width: '250px',
   backgroundColor: theme.palette.neutral?.darker
}))

const muiBoxCustomStyled = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "200px",
          height: "200px",
          color: "#658147",
          bgcolor: "secondary.main",
          padding: 2,
          textAlign: "center",
        }}
      >
        Zuleriqhbal Hendri
      </Box>
      <BoxStyled/>
    </React.Fragment>
  );
}

export default muiBoxCustomStyled;