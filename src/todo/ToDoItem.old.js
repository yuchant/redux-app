import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import {
  updateToDoItem,
  completeToDoItem,
  deleteToDoItem
} from "./todoActions";

import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";

const log = console.log.bind(this, "[ToDoItem.js]");

const TextInput = styled.input`
  padding: 5px 10px;
  margin-left: 10px;
  min-width: 200px;
`;

const StyledToDoItem = styled.div`
  border: 1px solid #eee;
  padding: 5px 10px;
  ${props =>
    props.complete &&
    css`
      ${TextInput} {
        text-decoration: line-through;
        color: green;
      }
    `};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  small {
    font-family: sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.1;
  }
`;

const Delete = styled.button`
  margin-left: 10px;
`;

const mapDispatchToProps = dispatch => {
  return {
    onChange: (event, index) => {
      log("onChange() of input. Action generated", index);
      dispatch(updateToDoItem(event.target.value, index));
    },
    onDelete: (event, index) => {
      log("onDelete()", index);
      dispatch(deleteToDoItem(index));
    },
    onCheckboxChange: (event, index) => {
      const isComplete = event.target.checked;
      log("onCheckboxChange() of input. Action generated", index, isComplete);
      dispatch(completeToDoItem(isComplete, index));
    }
  };
};

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};
const ToDoItem = props => {
  return (
    <StyledToDoItem complete={props.complete}>
      <RadioButton
        value="ludicrous"
        label="Custom icon"
        checkedIcon={<ActionFavorite style={{ color: "#F44336" }} />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
      <input
        type="checkbox"
        checked={props.complete}
        onChange={event => {
          props.onCheckboxChange(event, props.index);
        }}
      />
      <TextInput
        type="text"
        value={props.text}
        placeholder={props.placeholder}
        onChange={event => {
          props.onChange(event, props.index);
        }}
        disabled={props.complete}
      />
      <Delete
        onClick={event => {
          props.onDelete(event, props.index);
        }}
      >
        X
      </Delete>
      &nbsp; <small>Index: {props.index}</small>
    </StyledToDoItem>
  );
};

export default connect(null, mapDispatchToProps)(ToDoItem);
