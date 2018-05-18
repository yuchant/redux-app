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

export const showNotification = (message) => {
	return {
		type: SHOW_NOTIFICATION,
		message: message
	}
}

export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

export const hideNotification = (message) => {
	return {
		type: HIDE_NOTIFICATION
	}
}


export const flashNotification = (message, duration=1200) => (dispatch) => {
	// show notification then hide it a little later
	console.log("FLASHING NOTIFICATION", message, duration)
	dispatch(showNotification(message));
	setTimeout(() => {
		dispatch(hideNotification());
	}, duration)
}
