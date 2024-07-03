import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material';
import ChildCareIcon from "@mui/icons-material/ChildCare";

const MuiNavbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ padding: 2 }}
          >
            <ChildCareIcon />
          </IconButton>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Material App
          </Typography>
          <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
            <Button color="inherit">Home</Button>
            <Button
              variant="contained"
              color="inherit"
              disableElevation
              sx={{
                backgroundColor: "#F075AA",
                ":active": { backgroundColor: "#F075AA" },
                ":hover": { backgroundColor: "#F075AA" },
              }}
            >
              Profil
            </Button>
            <Button color="inherit">Logout</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MuiNavbar;