import React from "react";
import { Autocomplete, Box, TextField, Stack } from "@mui/material";

interface skillType {
  id: number,
  label: string
}

const skills = ["html", "css", "javascript", "java", "c++"];

const newSkills = skills.map((data, i) => ({
  id: i + 1,
  label: data
}));

const MuiAutoComplete = () => {
   const [skill, setSkill] = React.useState<string | null>(null);
   const [testObj, setTestObj] = React.useState<skillType[]>([]);
  console.log(testObj)

  const addNewSkills = (e: unknown, newValue: skillType[]) => {
    console.log(newValue);
    setTestObj(newValue);
  }
  return (
    <Stack spacing={2}>
      <Box width={"220px"}>
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField label="Skills" {...params} />}
          value={skill}
          onChange={(e: unknown, newValue: string | null) => setSkill(newValue)}
          freeSolo
        />
      </Box>

      <Box width={"220px"}>
        <Autocomplete
          multiple
          filterSelectedOptions
          options={newSkills}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} label="Choose Your Skills"/>}
          value={testObj}
          onChange={addNewSkills}
          size="small"
        />
      </Box>
    </Stack>
  );

};

export default MuiAutoComplete;
