import React from "react";

import { Typography } from "@material-ui/core/";

class Progress extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="display1" align="center">
          You're doing great!
        </Typography>
        <br />
        <Typography variant="body" align="center">
          Progress Graphs Placeholder
        </Typography>
      </div>
    );
  }
}

export default Progress;
