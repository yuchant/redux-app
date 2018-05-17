import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import AddItem from "./AddItem";
import ProgressBar from "./ProgressBar";

const log = console.log.bind(this, "[ToDo.js]");

const mapStateToProps = state => {
  return { todos: state.todos.items };
};

const StyledProgrssBar = styled.div`
  margin-bottom: 10px;
`;

const ConnectedToDoList = props => {
  console.log("props", props);
  return (
    <div>
      <StyledProgrssBar>
        <ProgressBar />
      </StyledProgrssBar>
      {props.todos.map(todo => {
        return <ToDoItem {...todo} />;
      })}
      <AddItem />
    </div>
  );
};

const ToDoList = connect(mapStateToProps)(ConnectedToDoList);

export default ToDoList;
