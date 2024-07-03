import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

const newDate = new Date();

const MuiDatePicker = () => {
   const [datePicker, setDatePicker] = useState<Dayjs | null>(null);
   const [timePicker, setTimePicker] = useState<Dayjs | null>(null);
   const [dateTimePicker, setDateTimePicker] = useState<Dayjs | null>(null);

   console.log(dateTimePicker);

  return (
    <React.Fragment>
      <Stack spacing={2} width={'30%'}>
         <DatePicker label="Date Picker" defaultValue={dayjs(newDate)} slotProps={{ textField: {variant: 'outlined'}}} value={datePicker} onChange={newValue => setDatePicker(newValue)}/>

         <TimePicker label="Time Picker" slotProps={{textField: {variant: 'outlined'}}} value={timePicker} onChange={(newValue) => setTimePicker(newValue)}/>

         <DateTimePicker label="Date Time Picker" defaultValue={dayjs(newDate)} slotProps={{ textField: {variant: 'outlined'}}} value={dateTimePicker} onChange={(newValue) => setDateTimePicker(newValue)}/>
      </Stack>
    </React.Fragment>
  )
}

export default MuiDatePicker