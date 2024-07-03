import React, { useState } from "react";
import { Box, FormControlLabel, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Icons
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import AddReactionRoundedIcon from "@mui/icons-material/AddReactionRounded";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const CustomRatingPerson = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function iconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const MuiRating = () => {
  const [giveRating, setGiveRating] = useState<number | null>(null);
  const [value, setValue] = useState<number | null>(null);
  const [valueRating, setValueRating] = useState<number | null>(null);

  const handleGiveStar = (
    e: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setGiveRating(newValue);
  };

  const handleGiveCustom = (
    e: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValueRating(newValue);
  };
  return (
    <Stack spacing={3}>
      <Box width={"240px"}>
        <Typography>Job Rating</Typography>
        <Rating
          name="Rating Job"
          value={giveRating}
          onChange={handleGiveStar}
          precision={0.5}
          size="large"
        />
      </Box>

      <Box>
        <Rating
          name="Custom-rating-icon-color"
          value={value}
          onChange={handleGiveCustom}
          precision={0.5}
          icon={<AddReactionRoundedIcon color="error" fontSize="inherit" />}
          emptyIcon={<AddReactionOutlinedIcon fontSize="inherit" />}
        />
      </Box>

      <Box width={"220px"}>
        <FormControlLabel label="The Food Rating" control={<Rating />} />
      </Box>

      <Box>
        <CustomRatingPerson
          name="custom-Person-Review"
          value={valueRating}
          onChange={handleGiveCustom}
          IconContainerComponent={iconContainer}
          getLabelText={(value: number) => customIcons[value].label}
          highlightSelectedOnly
        />
      </Box>
    </Stack>
  );
};

export default MuiRating;
