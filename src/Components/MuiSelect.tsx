import React, { useState } from "react";
import { Box, TextField, MenuItem, Select, SelectChangeEvent, FormControl, InputLabel, FormHelperText } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState<string>();
  const [countries, setCountries] = useState<string[]>([]);

  const handleChangeCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
   const value = e.target.value;

   setCountries(typeof value === 'string' ? value.split(',') : value);
  }

  const handleChangeCountry = (e: SelectChangeEvent) => {
    const valueChange = e.target.value;
    setCountry(valueChange);
  };

  return (
    <Box width={"240px"}>
      <TextField
        select
        value={countries}
        onChange={handleChangeCountries}
        SelectProps={{ multiple: true }}
        label="Select Your Country"
        helperText='Please Select Your Country'
        fullWidth
        sx={{ marginBottom: 4}}
      >
        <MenuItem value={"ina"}>Indonesia</MenuItem>
        <MenuItem value="Mal">Malaysia</MenuItem>
        <MenuItem value="Tha">Thailand</MenuItem>
      </TextField>
      <FormControl fullWidth sx={{ paddingX: 1 }}>
        <InputLabel>Please Select Your Country!</InputLabel>
        <Select
          value={country}
          label='Select Your Country!'
          onChange={handleChangeCountry}
        >
          <MenuItem value="ina">Indonesia</MenuItem>
          <MenuItem value="Mal">Malaysia</MenuItem>
          <MenuItem value="Sgp">Singapore</MenuItem>
        </Select>
        <FormHelperText>Please Fill</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiSelect;
