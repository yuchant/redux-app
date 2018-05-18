import { OPEN_NAVBAR, CLOSE_NAVBAR, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./uiActions";

const ui = (
  state = {
    navbarOpen: false
  },
  action
) => {
  switch (action.type) {
    case OPEN_NAVBAR:
      return Object.assign({}, state, {
        navbarOpen: true
      });
    case CLOSE_NAVBAR:
      return Object.assign({}, state, {
        navbarOpen: action.open
      });
    case SHOW_NOTIFICATION:
      return Object.assign({}, state, {
        notificationOpen: true,
        notificationMessage: action.message
      })
    case HIDE_NOTIFICATION:
      return Object.assign({}, state, {
        notificationOpen: false,
        notificationMessage: null
      })
    default:
      return state;
  }
};

export default ui;
