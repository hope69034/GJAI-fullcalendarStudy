import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [snackbarToggle, explain, severity] = useSelector(state=>([state.snackbar.snackbarToggle, state.snackbar.explain, state.snackbar.severity]));
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({type:"SNACKBAR/OFF", snackbar:{snackbarToggle:false}});
  }
  return (
    <>
      <Snackbar open={snackbarToggle} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {explain}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </>
  );
}
