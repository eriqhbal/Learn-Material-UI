import React, { useRef, useEffect } from "react";
import {
  Box,
  Fab,
  TextField,
  Chip,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  Button,
  Grid,
} from "@mui/material";

// Icon
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

// Color
import { green, red } from "@mui/material/colors";

// Other Components
import CustomList from "./CustomList";

export type playlist = {
  music: string;
  role: string;
};

function not(a: playlist[], b: playlist[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function innerSelection(a: playlist[], b: playlist[]) {
  return a.filter((item) => b.indexOf(item) !== -1);
}

const TransferList = () => {
  const [inputText, setInputText] = React.useState<string>("");
  const [helperTextMessage, setHelperTextMessage] = React.useState<string>("");
  const [defaultRole, setDefaultRole] = React.useState<string>("Play");
  const [saveText, setSaveText] = React.useState<Array<playlist>>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Initial State TransferList
  const [checked, setChecked] = React.useState<playlist[]>([]);
  const [right, setRight] = React.useState<playlist[]>([]);
  const [left, setLeft] = React.useState<playlist[]>([]);

  const checkedRight = innerSelection(right, checked);
  const checkedLeft = innerSelection(left, checked);

  // Button SaveText
  const handleSaveText = () => {
    if (!inputText) {
      setHelperTextMessage("Tolong isi favourite musik anda!");
    } else {
      const newValueSong = {
        music: inputText,
        role: defaultRole,
      };
      setSaveText((prev) => [...prev, newValueSong]);
      setInputText("");
      setHelperTextMessage("");
    }
  };

  const handleDeleteTextChip = (text: string) => {
    setSaveText((prev) => {
      return prev.filter((pre) => pre.music !== text);
    });
  };

  const handleRoleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultRole(e.target.value);
  };

  const handleSave = () => {
    for (let i = 0; i < saveText.length; i++) {
      if (saveText[i].role === "play") {
        setRight((prevRight) => prevRight.concat(saveText[i]));
      } else if (saveText[i].role === "noted") {
        setLeft((prevLeft) => prevLeft.concat(saveText[i]));
      }
    }

    setSaveText([]);
  };

  // Handle Button Transfer
  const moveAllItemToNoted = () => {
    setLeft((left) => left.concat(right));
    setRight([]);
  };

  const moveOneItemToNoted = () => {
    setLeft((prevLeft) => [...prevLeft, ...checkedRight]);
    setRight(not(right, checkedRight));
    setChecked(not(checked, checkedRight));
  };

  const moveAllItemToPlay = () => {
    setRight((right) => right.concat(left));
    setLeft([]);
  };

  const moveOneItemToPlay = () => {
    setRight(prevRight => prevRight.concat(checkedLeft));
    setLeft(not(left, checkedLeft));
    setChecked(not(checked, checkedLeft));
  }

  return (
    <Box padding={2} sx={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={2} direction={"row"} width={"70%"}>
        <Paper
          sx={{
            width: 450,
            height: 400,
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Box padding={2}>
            <TextField
              value={inputText}
              ref={inputRef}
              onChange={(e) => setInputText(e.target.value)}
              label="Input Song"
              variant="standard"
              size="small"
              fullWidth
              error={helperTextMessage && inputText === "" ? true : false}
              helperText={helperTextMessage && helperTextMessage}
            />
            <RadioGroup
              row
              name="playlist-music"
              sx={{
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 2,
              }}
              value={defaultRole}
              onChange={handleRoleRadio}
            >
              <FormControlLabel
                label="Play"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: green[700],
                      "&.Mui-checked": { color: green[500] },
                    }}
                    icon={<PlayCircleOutlineIcon />}
                    checkedIcon={<PlayCircleFilledWhiteIcon />}
                  />
                }
                value={"play"}
              />
              <FormControlLabel
                label="Noted"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: red[800],
                      "&.Mui-checked": { color: red[500] },
                    }}
                    icon={<StickyNote2OutlinedIcon />}
                    checkedIcon={<StickyNote2Icon />}
                  />
                }
                value={"noted"}
              />
            </RadioGroup>
            <Fab
              onClick={handleSaveText}
              variant="extended"
              size="small"
              sx={{ marginTop: 2, backgroundColor: "#EEEDEB", paddingX: 2 }}
            >
              <AddIcon sx={{ marginRight: 0.5 }} />
              Add
            </Fab>
            <Box marginTop={2}>
              {saveText.map((text, index) => (
                <Chip
                  key={index}
                  label={text.music}
                  variant="outlined"
                  size="small"
                  sx={{
                    marginX: 0.3,
                    marginY: 0.3,
                    borderColor: `${
                      text.role === "play" ? green[500] : red[500]
                    }`,
                  }}
                  onDelete={() => handleDeleteTextChip(text.music)}
                />
              ))}
            </Box>
            <Fab
              onClick={handleSave}
              variant="extended"
              size="small"
              sx={{
                marginTop: 2,
                paddingX: 2,
                backgroundColor: "#658147",
                ":hover": { backgroundColor: "#658147" },
                color: "white",
              }}
            >
              <SaveIcon sx={{ marginRight: 3 }} />
              Save
            </Fab>
          </Box>
        </Paper>

        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <CustomList
              items={right}
              checked={checked}
              title="Play"
              setChecked={setChecked}
            />
          </Grid>

          <Grid item>
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={1}
            >
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={moveAllItemToNoted}
                  disabled={right.length === 0}
                >
                  ≫
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={moveOneItemToNoted}
                  disabled={right.length === 0}
                >
                  &gt;
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={moveOneItemToPlay}
                  disabled={left.length === 0}
                >
                  &lt;
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={moveAllItemToPlay}
                  disabled={left.length === 0}
                >
                  ≪
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <CustomList
              items={left}
              checked={checked}
              title={"Noted"}
              setChecked={setChecked}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default TransferList;
