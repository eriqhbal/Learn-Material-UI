import React from "react";
import {
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListSubheader
} from "@mui/material";

import { playlist } from "./TransferList";

// Import Type
type PropsType = {
  items: playlist[];
  checked: playlist[];
  title: string;
  setChecked: React.Dispatch<React.SetStateAction<playlist[]>>;
};

const CustomList = ({ items, checked, title, setChecked }: PropsType) => {

  const handleChecked = (nameMusic: playlist) => {
    const currentIndex = checked.indexOf(nameMusic);
    const newValueChecked = [...checked];

    if (currentIndex === -1) {
      newValueChecked.push(nameMusic);
    } else {
      newValueChecked.splice(currentIndex, 1);
    }

    setChecked(newValueChecked);
  }
  
  return (
    <React.Fragment>
      <Paper sx={{ width: 200, height: 330, overflow: "auto" }}>
        <List dense component={"div"} role="list" aria-labelledby="nested-list-subheader" subheader={<ListSubheader component={"div"} id="nested-list-subheader">{title}</ListSubheader>}>
          {items.map((item, index) => {
            const labelId = `transfer-list-item-${item.music}-value`;

            return (
              <ListItemButton key={index} onClick={() => handleChecked(item)}>
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(item) !== -1}
                    disableRipple
                    tabIndex={-1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary={item.music} secondary={item.role}/>
              </ListItemButton>
            );
          })}
        </List>
      </Paper>
    </React.Fragment>
  );
};

export default CustomList;
