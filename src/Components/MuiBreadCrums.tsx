import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

// Icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MuiBreadCrums = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumbs-simple" separator={<ArrowForwardIosIcon fontSize='small'/>}>
        <Link underline="hover" variant='h6' color={"inherit"} href="#">
          Home
        </Link>
        <Link underline="hover" variant='h6' color={"inherit"} href="#">
          Profile
        </Link>
        <Link underline="hover" variant='h6' color={"inherit"} href="#">
          Settings
        </Link>
        <Typography variant='h6'>Password</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default MuiBreadCrums