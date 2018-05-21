import { createMuiTheme } from "@material-ui/core/styles";

import { cyan, blue } from "@material-ui/core/colors";

const overrides = {};
const theme = createMuiTheme({
  // Use the system font instead of the default Roboto font.
  typography: {
    fontFamily: "Open Sans, sans-serif",
    display1: {
      fontFamily: "Playfair Display",
      color: "black",
      fontSize: 28
    },
    display2: {
      fontFamily: "Playfair Display"
    },
    body1: {
      fontSize: 12,
      lineHeight: "1.6"
    }
  },
  palette: {
    primary: cyan,
    secondary: blue
  },
  overrides: overrides
});

export default theme;
