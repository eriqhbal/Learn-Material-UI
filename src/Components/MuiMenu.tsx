import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import ChildCareIcon from "@mui/icons-material/ChildCare";

const MuiMenu = () => {
   
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);

   function handleOpenMenu(e: React.MouseEvent<HTMLButtonElement>) {
      setAnchorEl(e.currentTarget);
   }

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
            <Button
              id="menu-contained"
              onClick={handleOpenMenu}
              aria-controls={open ? 'open-menu': undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : false}
              variant="contained"
              color="inherit"
              disableElevation

              sx={{
                backgroundColor: "#81A263",
                ":hover": { backgroundColor: "#81A263", boxShadow: 5 },
                ":active": { backgroundColor: "#81A263" },
              }}
            >
              Menu
            </Button>
            <Button color="inherit">Logout</Button>
          </Stack>
          <Menu id="open-menu" anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} MenuListProps={{ 'aria-labelledby': 'menu-contained'}} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} transformOrigin={{ vertical: 'top', horizontal: 'right'}}>
              <MenuItem>Change Password</MenuItem>
              <MenuItem>Change Username</MenuItem>
              <MenuItem>Delete Account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MuiMenu;
