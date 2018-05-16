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
