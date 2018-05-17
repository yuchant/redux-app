import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import cyan from "@material-ui/core/colors/cyan";

const mapStateToProps = state => {
  console.log("State", state);
  return {
    percentage: state.todos.progress
  };
};

const styles = {
  root: {
    height: "8px",
    colorPrimary: cyan[500],
    backgroundColor: "black"
  },
  colorPrimary: "red"
};

const ProgressBar = props => {
  return (
    <LinearProgress
      style={{ color: cyan[500] }}
      variant="determinate"
      value={props.percentage}
    />
  );
};

export default connect(mapStateToProps)(withStyles(styles)(ProgressBar));
