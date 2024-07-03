import React, { useState } from 'react';
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';

// Icon
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import SendIcon from "@mui/icons-material/Send";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);

  const handleChangeFormat = (e: React.MouseEvent<HTMLElement>, updatedFormat: string) => {
    setFormats(updatedFormat);
  }

  return (
    <Stack spacing={3} alignItems={"center"}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton
          size="medium"
          color="success"
          onClick={() => alert("hello")}
        >
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="success"
          aria-label="Button Group"
        >
          <Button onClick={() => alert("left")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ToggleButtonGroup value={formats} onChange={handleChangeFormat} aria-label='toggleButtonGroup' size='small' color='success' exclusive>
          <ToggleButton value={"bold"} aria-label="bold-button">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic-button">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underline' aria-label='underline-button'>
            <FormatUnderlinedIcon/>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;