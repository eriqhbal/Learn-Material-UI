import React from "react";
import {
  Box,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box>
      <Card sx={{ width: 330 }}>
        <CardMedia
          component={"img"}
          image="https://images.unsplash.com/photo-1717947499189-6c84fec5055c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={120}
        />
        <CardContent>
          <Typography variant="h5" component={"div"} gutterBottom>
            Card Component
          </Typography>
          <Typography variant="body2" component={"h3"}>
            Hello everyone in this component i create a simple card component
            for you
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
