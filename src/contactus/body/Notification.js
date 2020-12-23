import React from 'react';
import { Snackbar, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Notification = ({ isShowMessage, setIsShowMessage }) => {
  const styles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#313131',
      color: 'white',
    },
  }));

  const useStyles = styles();

  const handleClose = (event, reason) => {
    // to prevent users from clicking elsewhere to close the notification
    if (reason === 'clickaway') return;
    setIsShowMessage(false);
  };

  return (
    <Snackbar
      open={isShowMessage}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        className={useStyles.root}
        color="white"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setIsShowMessage(false)}
          >
            <CloseIcon fontSize="inherit" className="close-notification-button" />
          </IconButton>
        }
      >
        Message sent.
      </Alert>
    </Snackbar>
  );
};

export default Notification;
