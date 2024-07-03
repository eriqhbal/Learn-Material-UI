import React from 'react';
import { Alert, Stack, AlertTitle, Button } from '@mui/material';

// Icon
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Alert severity="error" sx={{ width: 400 }}>
          Error
        </Alert>
        <Alert severity="warning">Warning</Alert>
        <Alert severity="info">Info</Alert>
        <Alert severity="success">Success</Alert>
      </Stack>
      <Stack spacing={1}>
        <Alert variant="outlined" severity="error">
          Error
        </Alert>
        <Alert variant="outlined" severity="warning">
          Warning
        </Alert>
        <Alert variant="outlined" severity="info">
          Info
        </Alert>
        <Alert variant="outlined" severity="success">
          Success
        </Alert>
      </Stack>
      <Stack spacing={1}>
        <Alert variant="filled" severity="error">
          Error
        </Alert>
        <Alert variant="filled" severity="warning">
          Warning
        </Alert>
        <Alert variant="filled" severity="info">
          Info
        </Alert>
        <Alert variant="filled" severity="success">
          Success
        </Alert>
      </Stack>
      <Stack spacing={1}>
        <Alert variant="filled" severity="error" onClose={() => alert('This is on Close Button')}>
          <AlertTitle>Error</AlertTitle>
          This is an Example of error alert
        </Alert>
        <Alert variant="filled" severity="warning" icon={<CancelScheduleSendIcon/>} action={<Button color="inherit" size="small">Undo</Button>}>
          <AlertTitle>Warning</AlertTitle>
          This is an example of Warning Alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an example of info Alert
        </Alert>
        <Alert variant="filled" severity="success">
          <AlertTitle>Success</AlertTitle>
          This is an example of Success Alert
        </Alert>
      </Stack>
    </Stack>
  );
}

export default MuiAlert;