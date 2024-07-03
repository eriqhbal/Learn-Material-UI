import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  console.log(isDark);

  const handleChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.checked);
  };
  return (
    <Box sx={{backgroundColor: `${isDark ? 'black' : 'white'}`}}>
      <FormControlLabel
        label="switch Dark"
        control={
          <Switch
            checked={isDark}
            onChange={handleChangeSwitch}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
