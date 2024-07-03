import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

// icons
import CottageIcon from "@mui/icons-material/Cottage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const MuiBottomNavigation = () => {
   const [value, setValue] = useState<number>(0)

   function handleValue(e: unknown, newValue: number) {
      console.log(newValue);
      setValue(newValue);
   }
  return (
    <BottomNavigation showLabels sx={{position: 'absolute', width: '100%', bottom: 0}} value={value} onChange={handleValue}>
      <BottomNavigationAction label="Home" icon={<CottageIcon/>}/>
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon/>}/>
      <BottomNavigationAction label="Personal Info" icon={<PersonIcon/>}/>
    </BottomNavigation>
  )
}

export default MuiBottomNavigation;