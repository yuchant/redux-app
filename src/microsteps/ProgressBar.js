import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import cyan from "@material-ui/core/colors/cyan";

const mapStateToProps = state => {
  console.log("State", state);
  return {
    percentage: state.microsteps.progress,
    completedCount: state.microsteps.completed,
    totalCount: state.microsteps.items.length
  };
};

const styles = {
  text: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 18,
    fontFamily: "Playfair Display"
  },
  progress: {
    height: 7,
    colorPrimary: cyan[500],
    backgroundColor: "#DDD",
    marginBottom: 15
  },
  colorPrimary: "red"
};

const getRandom = items => items[Math.floor(Math.random() * items.length)];

const motivationTexts = [
  "Get started!",
  "Start thriving!",
  "Let's do this!",
  "You can do this!"
];

const getMessage = props => {
  // lets use some fun messaging variations
  // high bang for buck before animations
  switch (props.completedCount) {
    case 0:
      return `It's a new day. ${getRandom(motivationTexts)}`;
    case props.totalCount:
      return "All done!";
    default:
      return `You've completed ${props.completedCount}/${
        props.totalCount
      } micro steps`;
  }
};

const ProgressBar = props => {
  const { classes } = props;

  return (
    <div>
      <Typography className={classes.text}>{getMessage(props)}</Typography>
      <LinearProgress
        className={classes.progress}
        style={{ color: cyan[500] }}
        variant="determinate"
        value={props.percentage}
      />
    </div>
  );
};

export default connect(mapStateToProps)(withStyles(styles)(ProgressBar));
