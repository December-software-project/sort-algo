import React from 'react';
import { Snackbar, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

/**
 * A pop-up notification on the bottom left-hand corner to indicate that message is being sent.
 *
 * @component
 * @category Contact Us
 * @param isShowMessage boolean value of whether to show the message notification.
 * @param setIsShowMessage A setter which changes the state of isShowMessage.
 * @returns {JSX.Element} A notification which appears at the bottom left-hand corner.
 */
const Notification = ({ isShowMessage, setIsShowMessage }) => {
  const styles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#313131',
      color: 'white',
    },
  }));

  const useStyles = styles();

  /**
   * Handle the close event of the notification. Blocks all other method of closing except when
   * clicking the cross button.
   */
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
