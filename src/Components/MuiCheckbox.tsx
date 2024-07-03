import React, { useState } from "react";
import {
  Box,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormControl,
} from "@mui/material";

// Icon
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [checkedAgt, setCheckedAgt] = useState<boolean>(false);
  const [thereSkills, setThereSkills] = useState<string[]>([]);

  const handleCheckedAgt = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setCheckedAgt(e.target.checked);
  };

  const handleMultipleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const theValue = e.target.value;

    const index = thereSkills.indexOf(theValue);
    
    if(index === -1) {
      setThereSkills([...thereSkills, theValue]);
    } else {
      setThereSkills(thereSkills.filter(skill => skill !== theValue));
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Aggreement with the terms and policy"
          control={
            <Checkbox checked={checkedAgt} onChange={handleCheckedAgt} />
          }
        />
      </Box>

      <Box>
        <Checkbox
          checked={checkedAgt}
          onChange={handleCheckedAgt}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </Box>

      <Box sx={{ marginTop: 3}}>
        <FormControl>
          <FormLabel>Select Your Skills</FormLabel>
          <FormControlLabel label="HTML" value={'html'} control={<Checkbox checked={thereSkills.includes('html')} onChange={handleMultipleCheckbox} />} />
          <FormControlLabel label="CSS" value={'css'} control={<Checkbox checked={thereSkills.includes('css')} onChange={handleMultipleCheckbox}/>}/>
          <FormControlLabel label="Javascript" value={'js'} control={<Checkbox checked={thereSkills.includes('js')} onChange={handleMultipleCheckbox}/> }/>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
