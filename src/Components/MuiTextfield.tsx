import React, {useState} from "react";
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";

// Icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const MuiTextfield = () => {

  const [texts, setTexts] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleChangeVisibility = () => setVisibility((prev) => !prev);

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <TextField aria-label="name" label="Name" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="Outlined Field" variant="outlined" />
        <TextField label="Filled Field" variant="filled" />
        <TextField label="Standard Field" variant="standard" />
      </Stack>

      <Stack spacing={1} direction={"row"}>
        <TextField label="size & color" size="small" color="secondary" />
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <TextField label="Username" size="small" required />
        <TextField
          label="Password"
          value={texts}
          onChange={e => setTexts(e.target.value)}
          size="small"
          type={visibility ? 'text' : 'password'}
          error={!texts ? true : false}
          helperText={!texts ? 'Please Fill Your Password' : 'Don\'t share Your Password! '}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleChangeVisibility}>
                  {visibility ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <TextField
          label="Read Only"
          size="small"
          inputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Fullname"
          InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              <AccountCircle/>
            </InputAdornment>
            )
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextfield;
