import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MicroStep from "./MicroStep";
import AddItem from "./AddItem";
import ProgressBar from "./ProgressBar";

const log = console.log.bind(this, "[ToDo.js]");

const mapStateToProps = state => {
  return {
    microsteps: state.microsteps.items
  };
};

const StyledProgrssBar = styled.div`
  margin-bottom: 10px;
`;

const StyledTodo = styled.div`
  margin-top: 20px;
`;

const ConnectedToDoList = props => {
  console.log("props", props);
  return (
    <StyledTodo>
      <StyledProgrssBar>
        <ProgressBar />
      </StyledProgrssBar>
      {props.microsteps.map(step => {
        return <MicroStep {...step} key={step.id} />;
      })}
    </StyledTodo>
  );
  // <AddItem />
};

const ToDoList = connect(mapStateToProps)(ConnectedToDoList);

export default ToDoList;
