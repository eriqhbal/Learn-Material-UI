import React, { useState } from 'react';

import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
   const [isExpanded, setIsExpanded] = useState<string | boolean>(false);

   function handleChangeAccordion(value: boolean, nameExpanded: string) {
      setIsExpanded(value ? nameExpanded : false);
   }
  return (
    <React.Fragment>
      <Box sx={{ width: 480, marginX: "auto", marginY: 5 }}>
        <Accordion expanded={isExpanded === "panel1"} onChange={(e, newValue) => handleChangeAccordion(newValue, 'panel1')}>
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-actions"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h5">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component={"h4"}>
              This is accordion details in accordion 1
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={isExpanded === "panel2"} onChange={(e, newValue) => handleChangeAccordion(newValue, 'panel2')}>
          <AccordionSummary id="panel2-header" aria-controls='panel2-actions' expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body1' component={'h4'}>This is Accordion details in accordion 2</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={isExpanded === "panel3"} onChange={(e, newValue) => handleChangeAccordion(newValue, 'panel3')}>
         <AccordionSummary id="panel3-header" aria-controls='panel3-actions' expandIcon={<ExpandMoreIcon/>}>
            <Typography variant='h5'>Accordion 3</Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography variant='body1' component={'h4'}>
               This is accordion 3 details in Accordion 3
            </Typography>
         </AccordionDetails>
        </Accordion>
      </Box>
    </React.Fragment>
  );
}

export default MuiAccordion;