import React from 'react';
import { Box, Paper, Accordion, AccordionSummary, AccordionDetails, Stack } from '@mui/material';
import { Masonry } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const MuiMasonry = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      <Box width={500} minHeight={400}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                height,
               //  display: "flex",
               //  justifyContent: "center",
               //  alignItems: "center",
                border: "1px solid",
              }}
            ></Paper>
          ))}
        </Masonry>
      </Box>
      <Box width={500} minHeight={400}>
         <Masonry columns={4} spacing={1}>
          {
            heights.map((height, index) => {
               return (
                  <Paper key={index}>
                     <Accordion sx={{ minHeight: height }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                           Accordion {index + 1}
                        </AccordionSummary>
                        <AccordionDetails>
                           Content
                        </AccordionDetails>
                     </Accordion>
                  </Paper>
               )
            })
          }
         </Masonry>

      </Box>
    </Stack>
  );
}

export default MuiMasonry;