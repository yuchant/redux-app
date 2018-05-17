import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import cyan from "@material-ui/core/colors/cyan";

const StyledLoader = styled.div`
  position: fixed;
  background: white;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
  display: ${props => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = state => {
  return {
    loading: state.isFetching
  };
};

const style = {
  refresh: {
    display: "inline-block",
    position: "relative"
  }
};
const styles = {
  circle: {
    width: 150
  }
};

const Loader = props => {
  const { classes } = props;
  return (
    <StyledLoader visible={props.loading}>
      <CircularProgress className={classes.circle} size={175} thickness={1} />
    </StyledLoader>
  );
};

export default connect(mapStateToProps, null)(withStyles(styles)(Loader));
