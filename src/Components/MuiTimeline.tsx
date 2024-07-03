import React from 'react';
import { Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

const MuiTimeline = () => {
  return (
    <Box width={"500px"} bgcolor={"#E7D4B5"} marginX={"auto"}>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Timeline Content A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Timeline Content B</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Timeline Content c</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default MuiTimeline