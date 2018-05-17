import { createMuiTheme } from "@material-ui/core/styles";

import { cyan, blue } from "@material-ui/core/colors";

const overrides = {};
const theme = createMuiTheme({
  // Use the system font instead of the default Roboto font.
  typography: {
    fontFamily: "Montserrat, sans-serif"
  },
  palette: {
    primary: cyan,
    secondary: blue
  },
  overrides: overrides
});

export default theme;
