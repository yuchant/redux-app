import React from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Chip
} from "@material-ui/core";
import { toggleTopic } from "./journeysActions";
import { emphasize, fade } from "@material-ui/core/styles/colorManipulator";
import ConfigureNextButton from "./ConfigureNextButton";

const mapStateToProps = (state, ownProps) => {
  return {
    topics: state.journeys.topics
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (event, topic) => {
      dispatch(toggleTopic(topic));
    }
  };
};

// this is an overlay
const StyledConfigure = styled.div`
  padding: 0 20px; // force text wrap
`;

const Center = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 137px);
`;

const StyledChips = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const styles = theme => {
  return {
    helpText: {
      marginTop: 10,
      display: "block"
    },
    chip: {
      margin: "0 5px 10px 5px"
    },
    chipClickable: {
      "&:hover": {
        // NOTE: we have a problem here where inputs aren't blur()d which
        // causes focus state to stick too long
        // we'll just match active
        backgroundColor: theme.palette.primary[500]
      },
      "&:focus": {
        backgroundColor:
          // default from source https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Chip/Chip.js
          theme.palette.type === "light"
            ? theme.palette.grey[300]
            : theme.palette.grey[700]
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: theme.palette.primary[500]
      }
    },

    chipSelected: {
      backgroundColor: theme.palette.primary[500],
      // always be blue if selected. ignore defaults.
      // wish i knew how to destroy/remove mat-ui styles.
      "&:focus, &:active, &:hover": {
        backgroundColor: theme.palette.primary[500]
      }
    }
  };
};

// TODO: Should animate up when complete to reveal the joureys below.
class Configure extends React.Component {
  render() {
    const { classes } = this.props;
    console.log("PROPS", this.props);
    return (
      <Center>
        <StyledConfigure>
          <Typography align="center" variant="display1">
            Start Your Journey
          </Typography>
          <Typography align="center" className={classes.helpText}>
            What do you want to thrive at?
          </Typography>

          <StyledChips>
            {this.props.topics.map(topic => {
              return (
                <Chip
                  label={topic.name}
                  className={`${topic.selected ? classes.chipSelected : null}`}
                  classes={{
                    root: classes.chip,
                    clickable: classes.chipClickable
                  }}
                  onClick={event => {
                    this.props.onClick(event, topic);
                    event.target.blur();
                  }}
                />
              );
            })}
          </StyledChips>

          <ConfigureNextButton />
        </StyledConfigure>
      </Center>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Configure)
);
