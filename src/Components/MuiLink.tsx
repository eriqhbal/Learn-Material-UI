import React from "react";
import { Stack, Link, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row">
      <Link href="#" color={"secondary"} variant="h5">
        Back Home
      </Link>
      <Typography variant="body1">
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          color="error"
        >
          Back Yourself
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
