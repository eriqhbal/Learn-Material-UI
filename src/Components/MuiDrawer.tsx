import React, { useState } from 'react';
import { Box, Drawer, Typography, IconButton } from '@mui/material';

// Icon
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";

const MuiDrawer = () => {
   const [openDrawer, setOpenDrawer] = useState<boolean>(false);

   function handleOpenDrawer() {
      setOpenDrawer(true);
   }
  return (
    <Box>
      <IconButton size='small' onClick={handleOpenDrawer}>
         <AlignHorizontalLeftIcon/>
      </IconButton>
      <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
         <Box p={2} width={'250px'} textAlign={'center'} role='presentation'>
            <Typography variant="h5" color="inherit" component={"div"}>Hello Drawer</Typography>
         </Box>
      </Drawer>
    </Box>
  )
}

export default MuiDrawer;