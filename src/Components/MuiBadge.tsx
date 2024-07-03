import React from "react";
import { Badge, IconButton, Stack } from "@mui/material";

// Import Icon
import { ContactMail } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

const MuiBadge = () => {
  return (
    <Stack sx={{ marginTop: 4 }} spacing={2} direction={"row"}>
      <Badge badgeContent={2} color="primary">
        <ContactMail />
      </Badge>
      <Badge badgeContent={514} color="secondary">
        <EmailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <EmailIcon />
      </Badge>
      <Badge
        badgeContent={30}
        color="secondary"
        showZero
      >
        <EmailIcon />
      </Badge>
      <IconButton>
        <Badge
          badgeContent={30}
          color="secondary"
          showZero
        >
          <EmailIcon />
        </Badge>
      </IconButton>
      <Badge variant="dot" color="primary">
        <EmailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
