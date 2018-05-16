import { OPEN_NAVBAR, CLOSE_NAVBAR } from "./uiActions";

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
    default:
      return state;
  }
};

export default ui;
