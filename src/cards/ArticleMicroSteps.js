import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Divider, Typography } from "@material-ui/core";

import Snackbar from "@material-ui/core/Snackbar";

import { addMicroStep, deleteMicroStep } from "../microsteps/microstepActions";
import { flashNotification } from "../ui/uiActions";

const log = console.log.bind(this, "[ArticleMicroSteps.js]");

const mapStateToProps = (state, ownProps) => {
  const currentMicroSteps = state.microsteps.items;
  // this is not pretty.
  // would not be a problem if we had shared state via microsteps stored by ID
  // and it could keep track of whether its selected via new key `selected`
  const microStepsWithActiveState = ownProps.article.microSteps.map(step => {
    step.isAlreadyAdded = currentMicroSteps.some(step_ => step_.id == step.id);
    return step;
  });
  return {
    microStepsWithActiveState: microStepsWithActiveState
  };
};

const StyledNotificationEmphasis = styled.span`
  font-weight: bold;
`;

const mapDispatchToProps = dispatch => {
  return {
    onChangeMicroStep: (event, step) => {
      if (event.target.checked) {
        dispatch(addMicroStep(step));
        const message = (
          <div>
            Added{" "}
            <StyledNotificationEmphasis>{step.text}</StyledNotificationEmphasis>.
            Visit <Link to="/micro-steps">Your Micro Steps!</Link>
          </div>
        );
        dispatch(flashNotification(message, 3000));
      } else {
        dispatch(deleteMicroStep(step.id));
      }
    }
  };
};

const StyledTitle = styled.div`
  margin-top: 2em;
`;

const StyledSubtitle = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;
const StyledStepsWrapper = styled.div`
  max-width: 250px;
  margin: 0 auto;
`;

const styles = {
  label: {}
};
class ArticleMicroSteps extends React.Component {
  render() {
    const { classes } = this.props;
    const article = this.props.article;
    return (
      <div>
        <Divider />
        <StyledTitle>
          <Typography variant="display1" align="center">
            Practice the Article
          </Typography>
        </StyledTitle>
        <StyledSubtitle>
          <Typography align="center">
            We've created a way for you to learn how to apply the lessons from
            this article. Add the Micro Steps you're interested into your daily
            ritual!
          </Typography>
        </StyledSubtitle>
        <StyledStepsWrapper>
          {this.props.microStepsWithActiveState.map(step => {
            return (
              <FormGroup>
                <FormControlLabel
                  label={step.text}
                  className={classes.label}
                  control={
                    <Switch
                      value="checkedA"
                      color="primary"
                      checked={step.isAlreadyAdded}
                      onChange={event => {
                        this.props.onChangeMicroStep(event, step);
                      }}
                    />
                  }
                />
              </FormGroup>
            );
          })}
        </StyledStepsWrapper>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(ArticleMicroSteps)
);
