import React from 'react';
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// icon
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
  return (
    <React.Fragment>
      <Stack direction={"row"} spacing={1}>
        <LoadingButton variant="outlined">Enter</LoadingButton>
        <LoadingButton loading variant="outlined">
          Enter
        </LoadingButton>
        <LoadingButton
          variant="contained"
          color="error"
          loadingIndicator="..wait"
        >
          Submit
        </LoadingButton>
        <LoadingButton
          loading
          variant="contained"
          color="error"
          loadingIndicator="Loading..."
        >
          Submit
        </LoadingButton>
      </Stack>

      <Stack direction="row" spacing={1}>
        <LoadingButton
          variant="outlined"
          color="success"
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Submit
        </LoadingButton>
        <LoadingButton
          loading
          variant="outlined"
          color="success"
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Submit
        </LoadingButton>
      </Stack>
    </React.Fragment>
  );
}

export default MuiLoadingButton