import React, { forwardRef, PropsWithChildren } from 'react';
import { Button, Snackbar, Alert, AlertProps } from '@mui/material';

interface Props  {
  onClose: (e?: React.SyntheticEvent | Event, Reason?: string) => void;
  severity: string;
};

const SnackbarAlert: React.FC<PropsWithChildren<Props>> = forwardRef<HTMLDivElement | AlertProps>(
   function SnackbarAlert(props, ref) {
      return <Alert elevation={6} ref={ref} {...props} />;
   }
)

const MuiSnackbar = () => {
   const [open, setOpen] = React.useState<boolean>(false);

   const handleClose = (e?: React.SyntheticEvent | Event, Reason?: string) => {
      console.log(e, Reason);

      if(Reason === 'clickaway') {
         return;
      }
      setOpen(false);
   }
  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Call Snackbar</Button>
      {/* <Snackbar message="Login Is successfully" open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: "center"}}/> */}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: "center"}}>
         <SnackbarAlert onClose={handleClose} severity="success">
            Register is Successfully!
         </SnackbarAlert>
      </Snackbar>
    </React.Fragment>
  )
}

export default MuiSnackbar;