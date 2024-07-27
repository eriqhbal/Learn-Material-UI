import React from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';

// icons
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const MuiSlider = () => {

  const [initialVolume, setInitialVolume] = React.useState<number>(0);

  const handleVolume = (e: Event, newValue: number | number[]) => {
    setInitialVolume(newValue as number);    
  }

  return (
    <Stack direction="column" spacing={1}>
      <Box width={230} height={45} textAlign={"center"}>
        <Slider
          aria-label="Volume"
          value={initialVolume}
          onChange={handleVolume}
        />
        <Typography variant="body2">{initialVolume}</Typography>
      </Box>

      <Box width={230} height={45} textAlign={"center"}>
        <Stack spacing={2} direction={'row'}>
          <VolumeDownIcon />
          <Slider value={initialVolume} size="small" onChange={handleVolume} />
          <VolumeUpIcon />
        </Stack>
      </Box>

      <Box width={230} height={45}>
        <Slider value={initialVolume} onChange={handleVolume} marks step={25} />
      </Box>
    </Stack>
  );
}

export default MuiSlider