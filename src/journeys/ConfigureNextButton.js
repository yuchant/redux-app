import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import cyan from "@material-ui/core/colors/cyan";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import * as journeysActions from "./journeysActions";
import { push } from "react-router-redux";

const mapStateToProps = state => {
  const completed = state.journeys.topics.filter(topic => topic.selected);
  return {
    buttonValid: completed.length > 0,
    hasConfigured: state.journeys.hasConfigured
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeConfiguration: () => {
      dispatch(journeysActions.completeConfiguration());
      dispatch(push("/journeys"));
    }
  };
};

const styles = theme => ({
  button: {
    width: 120,
    height: 120,
    fontSize: 18,
    color: "white"
  }
});

const Main = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ConfigureNextButton = props => {
  const { classes } = props;
  return (
    <Main>
      <Button
        variant="fab"
        color="primary"
        aria-label="continue"
        className={classes.button}
        disabled={!props.buttonValid}
        onClick={props.completeConfiguration}
      >
        {props.hasConfigured ? "KEEP" : "START"} THRIVING
      </Button>
    </Main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(ConfigureNextButton)
);
