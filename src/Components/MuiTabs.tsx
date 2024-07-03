import React, { useState} from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';

const MuiTabs = () => {
   const [value, setValue] = useState<string>("1");

   const handleChangeTabs = (e: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
   }
  return (
    <React.Fragment>
      <Box >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: '450px', marginX: "auto"}}>
            <Tabs aria-label="Tabs-Change" value={value} onChange={handleChangeTabs} textColor='secondary' indicatorColor='secondary' centered >
              <Tab label="View 1" value="1" />
              <Tab label="View 2" value="2" />
              <Tab label="View 3" value="3" />
            </Tabs>
          </Box>
          <TabPanel value="1">View 1</TabPanel>
          <TabPanel value="2">View 2</TabPanel>
          <TabPanel value="3">View 3</TabPanel>
        </TabContext>
      </Box>
    </React.Fragment>
  );
}

export default MuiTabs