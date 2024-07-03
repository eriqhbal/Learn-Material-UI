import { Box } from '@mui/material';

const MuiResponsiveness = () => {
  return (
    <Box
      sx={{
        height: 300,
        width: {
          xs: 100, // 0
          sm: 200, // 600
          md: 300, // 900
          lg: 400, // 1200
          xl: 500, // 1536
        },
        backgroundColor: "#7D8ABC",
      }}
    ></Box>
  );
}

export default MuiResponsiveness