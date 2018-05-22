export const OPEN_NAVBAR = "OPEN_NAVBAR";
export const openNavbar = () => {
  return {
    type: OPEN_NAVBAR
  };
};

export const CLOSE_NAVBAR = "CLOSE_NAVBAR";
export const closeNavbar = open => {
  return {
    type: CLOSE_NAVBAR,
    open: open // mui passes this param - may have unknown use cases so we will respect
  };
};

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const showNotification = message => {
  return {
    type: SHOW_NOTIFICATION,
    message: message
  };
};

export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";
export const hideNotification = message => {
  return {
    type: HIDE_NOTIFICATION
  };
};

export const flashNotification = (message, duration = 1200) => dispatch => {
  // show notification then hide it a little later
  dispatch(showNotification(message));
  setTimeout(() => {
    dispatch(hideNotification());
  }, duration);
};


export const SHOW_LOADER = "SHOW_LOADER";
export const showLoader = (message=null) => {
  return {
    type: SHOW_LOADER,
    message: message
  }
}

export const HIDE_LOADER = "HIDE_LOADER";
export const hideLoader = (delay=0) => {
  return {
    type: HIDE_LOADER,
    delay: delay
  }
}
