import React, {useState, useEffect } from 'react';
import { Skeleton, Stack, Typography, Avatar, Box } from '@mui/material';

const MuiSkeleton = () => {
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   },[]);

  return (
    <Box sx={{width: '250px'}}>
      <Stack spacing={1}>
        {loading ? (
          <Skeleton variant="rectangular" width={256} height={144} />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1712857329031-eecb5980eec7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={256}
            height={144}
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            <Avatar>ZH</Avatar>
          )}
          <Stack spacing={1} sx={{ width: "80%" }}>
            {loading ? (
              <React.Fragment>
                <Typography variant="body1">
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
              </React.Fragment>
            ) : (
              <Typography variant="body1">
                This Is an example of skeleton material UI
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default MuiSkeleton