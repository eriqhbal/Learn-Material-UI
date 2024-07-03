import React, { useState } from "react";
import {
  Grid,
  List,
  ListItemButton,
  Paper,
  Checkbox,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

function not(a: readonly number[], b: readonly number[]) {
   return a.filter(value => b.indexOf(value) === -1);
}

function interSection(a: readonly number[], b: readonly number[]) {
   return a.filter(value => b.indexOf(value) !== -1);
}

const MuiTransferList = () => {
  const [checked, setChecked] = useState<readonly number[]>([]);
  const [left, setLeft] = useState<readonly number[]>([0, 1, 2, 3]);
  const [right, setRight] = useState<readonly number[]>([4, 5, 6, 7]);

  const checkedRight = interSection(checked, right);
  const checkedLeft = interSection(checked, left);

  console.log(checked, checkedLeft)

  const handleToggle = (value: number) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

  const handleAllRight = () => {
   setRight(right.concat(left));
   setLeft([]);
  }

  const handleOneItemToRight = () => {
      setRight(right.concat(checkedLeft));
      setLeft(not(left, checkedLeft));
      setChecked(not(checked, checkedLeft));
  }

  const handleAllLeft = () => {
   setLeft(left.concat(right));
   setRight([]);
  }

  const handleOneItemToLeft = () => {
   setLeft(left.concat(checkedRight));
   setRight(not(right, checkedRight));
   setChecked(not(checked, checkedRight));
  }

  const customList = (items: readonly number[]) => {
    return (
      <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
        <List dense component={"div"} role="list">
          {items.map((item) => {
            const labelId = `transfer-list-item-${item}-value`;

            return (
              <ListItemButton key={item} onClick={() => handleToggle(item)}>
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(item) !== -1}
                    disableRipple
                    tabIndex={-1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary={`Item ${item + 1}`} />
              </ListItemButton>
            );
          })}
        </List>
      </Paper>
    );
  };

  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid
            container
            spacing={1}
            direction={"column"}
            alignItems={"center"}
          >
            <Grid item>
              <Button
                onClick={handleAllRight}
                variant="outlined"
                size="small"
                color="primary"
                disabled={left.length === 0}
                aria-label="move-all-right"
              >
                ≫
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleOneItemToRight}
                disabled={left.length === 0}
              >
                &gt;
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleOneItemToLeft}
                disabled={right.length === 0}
              >
                &lt;
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="small" color="primary" onClick={handleAllLeft} disabled={right.length === 0}>
               ≪
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
         {
            customList(right)
         }
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MuiTransferList;
