import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addMicroStep } from "./microstepActions";

const log = console.log.bind(this, "[AddItem.js]");

const mapDispatchToProps = (dispatch, ownProps) => {
  // we are registering onClick to be accessible in React Component prop
  return {
    onClick: () => {
      log("onClick mapped from AddButton props and called");
      const action = addMicroStep();

      log("action generated is ", action);
      return dispatch(action);
    }
  };
};

const StyledButton = styled.button`
  margin-top: 20px;
`;

const AddButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Add</StyledButton>;
};

export default connect(null, mapDispatchToProps)(AddButton);
