import React from "react";
import {
  Stack,
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
  Divider
} from "@mui/material";

// icon
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import Person2Icon from "@mui/icons-material/Person2";

const MuiList = () => {
  return (
    <Stack spacing={2} display={"block"}>
      {/* Basic List */}
      <Box width={320} sx={{ backgroundColor: "#efefef" }}>
        <List
          subheader={
            <ListSubheader component={"div"} id="Basic-list-materialUi">
              Basic List
            </ListSubheader>
          }
        >
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GoogleIcon />
            </ListItemIcon>
            <ListItemText primary="Google" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Box>

      {/* Button List */}
      <Box width={320} sx={{ backgroundColor: "#efefef" }}>
        <List
          subheader={
            <ListSubheader component={"div"}>Button List</ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <GoogleIcon />
            </ListItemIcon>
            <ListItemText primary="Google" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
      </Box>

      {/* Secondary Text */}
      <Box width={320} sx={{ backgroundColor: "#efefef" }}>
        <List
          subheader={
            <ListSubheader component={"div"}>Secondary Text</ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" secondary="This is Email" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <GoogleIcon />
            </ListItemIcon>
            <ListItemText primary="Google" secondary="This is Google" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary="Profile" secondary="This is Profile" />
          </ListItemButton>
        </List>
      </Box>

      {/* With Avatar */}
      <Box width={320} sx={{ backgroundColor: "#efefef" }}>
        <List
          subheader={
            <ListSubheader component={"div"}>With Avatar</ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemAvatar>
              <ListItemIcon>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemIcon>
            </ListItemAvatar>
            <ListItemText primary="Email" />
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <ListItemIcon>
                <Avatar>
                  <GoogleIcon />
                </Avatar>
              </ListItemIcon>
            </ListItemAvatar>

            <ListItemText primary="Google" />
          </ListItemButton>
          <Divider/>
          <ListItemButton>
            <ListItemAvatar>
              <ListItemIcon>
                <Avatar>
                  <Person2Icon />
                </Avatar>
              </ListItemIcon>
            </ListItemAvatar>

            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
      </Box>
    </Stack>
  );
};

export default MuiList;
