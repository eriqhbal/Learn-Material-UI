import React, {useState} from 'react';
import { Box } from '@mui/material';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import {Dayjs} from 'dayjs';


const MuiRangeDatePicker = () => {
   const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([null, null]);
  return (
    <Box width={'500px'}>
      <DateRangePicker localeText={{start: "Check-in", end: "Check-Out"}}/>
    </Box>
  )
}

export default MuiRangeDatePicker;