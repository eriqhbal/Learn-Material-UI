import React from 'react';
import { Tooltip, IconButton } from '@mui/material';

// Icon
import DeleteIcon from "@mui/icons-material/Delete";

const MuiTooltip = () => {
  return (
    <Tooltip title="Delete" placement="right" arrow enterDelay={500} leaveDelay={200}>
      <IconButton>
         <DeleteIcon/>
      </IconButton>
    </Tooltip>
  )
}

export default MuiTooltip;