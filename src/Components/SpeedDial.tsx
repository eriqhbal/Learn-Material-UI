import React from 'react';
import { Box, SpeedDial as SpeedDialAj, SpeedDialIcon, SpeedDialAction } from '@mui/material';

// Icon
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";


const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const SpeedDial = () => {
  return (
    <Box sx={{ height: 320, flexGrow: 1 }}>
      <SpeedDialAj
        ariaLabel="SpeedDial Basic Action Example"
        icon={<SpeedDialIcon openIcon={<FilterVintageIcon/>}/>}
        sx={{ position: "absolute", bottom: 18, right: 15 }}
      >
        {actions.map((act) => {
          return (
            <SpeedDialAction
              key={act.name}
              icon={act.icon}
              tooltipTitle={act.name}
            />
          );
        })}
      </SpeedDialAj>
    </Box>
  );
}

export default SpeedDial;