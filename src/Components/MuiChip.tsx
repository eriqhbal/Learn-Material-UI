import React from 'react';
import { Stack, Chip, Avatar} from "@mui/material";

// icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MuiChip = () => {

   const [data, setData] = React.useState<Array<string>>(['data1', 'data2', 'data3', 'data4']);

   function handleRemove(dataChip: string) {
      setData(prev => prev.filter(pre => pre !== dataChip));
   }
  return (
    <Stack direction={"row"} spacing={2}>
      <Chip label="Basic" color="primary" size="small" />
      <Chip label="Avatar chip" color="success" avatar={<Avatar>ZH</Avatar>} />
      <Chip
        label="Variant Chip"
        color="error"
        size="small"
        variant='outlined'
      />
      <Chip
        label="Icon Chip"
        color="secondary"
        size="small"
        icon={<AccountCircleIcon />}
      />
      <Chip
        label="Clickable"
        color="primary"
        icon={<AccountCircleIcon />}
        onClick={() => alert("Hello")}
        onDelete={() => alert("remove chip")}
      />
      {data.map(value => {
         return (
            <Chip key={value} label={value} color="primary" size="small" icon={<AccountCircleIcon/>} onDelete={() => handleRemove(value)}/>
         )
      })}
    </Stack>
  );
}

export default MuiChip;