import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  ListItemText
} from "@mui/material";

// Color
import { blue } from "@mui/material/colors";

// icon
import PersonIcon from "@mui/icons-material/Person";

const emails = ["username@gmail.com", "user02@gmail.com"];

const MuiDialog = () => {
  const [openDialogSubmit, setOpenDialogSubmit] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => setOpenDialogSubmit(true)}
      >
        Submit
      </Button>
      <Dialog aria-labelledby='Dialog-Title' aria-describedby='Dialog-Content' open={openDialogSubmit} onClose={() => setOpenDialogSubmit(false)}>
         <DialogTitle aria-labelledby='Dialog-Title'>Are You Sure For Submit ?</DialogTitle>
         <DialogContent>
            <DialogContentText>
               if you are submit the task, you cannot editted your answer again. if you ready.
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={() => setOpenDialogSubmit(false)}>Cancel</Button>
            <Button onClick={() => setOpenDialogSubmit(false)}>Submit</Button>
         </DialogActions>
      </Dialog>
      {/* <Dialog
        open={openDialogSubmit}
        onClose={() => setOpenDialogSubmit(false)}
        aria-labelledby="Dialog-Title"
        aria-describedby="Dialog-Content"
      >
         <DialogTitle>Change User Account</DialogTitle>
        <List sx={{width: '100%'}} disablePadding>
         {
            emails.map(email => {
               return (
                  <ListItemButton key={email}>
                     <ListItemAvatar>
                        <ListItemIcon>
                           <Avatar sx={{bgcolor: blue[100], color: blue[600]}}>
                              <PersonIcon/>
                           </Avatar>
                        </ListItemIcon>
                     </ListItemAvatar>
                     <ListItemText primary={email}/>
                  </ListItemButton>
               )
            })
         }
        </List>
      </Dialog> */}
    </React.Fragment>
  );
};

export default MuiDialog;
