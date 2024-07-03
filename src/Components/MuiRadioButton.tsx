import React, {useState} from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, FormHelperText, RadioGroup, Radio } from '@mui/material';

const MuiRadioButton = () => {
   const [value, setValue] = useState<string>('');

   const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   }
  return (
    <Box width={'240px'}>

      <FormControl fullWidth error={!value ? true : false}>
         <FormLabel id='job-experience-group-label'>Years Of Experience</FormLabel>
         <RadioGroup value={value} onChange={handleChangeValue} row aria-labelledby='job-experience-group-label' name='job-experience-group'>
            <FormControlLabel control={<Radio/>} label='0-5' value={'0-5'}/>
            <FormControlLabel control={<Radio/>} label='5-10' value={'5-10'}/>
            <FormControlLabel control={<Radio/>} label='10-15' value="10-15"/>
         </RadioGroup>
         <FormHelperText>Please Select Your Experience</FormHelperText>
      </FormControl>

    </Box>
  )
}

export default MuiRadioButton;