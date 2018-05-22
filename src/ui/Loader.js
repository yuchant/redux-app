import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import cyan from "@material-ui/core/colors/cyan";

const mapStateToProps = state => {
  return {
    loading: state.ui.isLoading,
    reason: state.ui.isLoadingMessage
  };
};

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

const StyledReason = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  font-family: "Playfair Display";
  font-size: 20px;
`;

const Center = styled.div`
  text-align: center;
`;

const styles = {
  circle: {
    display: "inline-block",
    width: 150,
    margin: "0 auto"
  }
};

const Loader = props => {
  const { classes } = props;
  return (
    <StyledLoader visible={props.loading}>
      <Center>
        <CircularProgress className={classes.circle} size={175} thickness={1} />
        <StyledReason>
          <small>{props.reason}</small>
        </StyledReason>
      </Center>
    </StyledLoader>
  );
};

export default connect(mapStateToProps, null)(withStyles(styles)(Loader));
