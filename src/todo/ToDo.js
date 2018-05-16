import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import AddItem from "./AddItem";

const log = console.log.bind(this, "[ToDo.js]");
const mapStateToProps = state => {
  return { todos: state.todos };
};

const ConnectedToDoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return <ToDoItem {...todo} />;
      })}
      <AddItem />
    </div>
  );
};

const ToDoList = connect(mapStateToProps)(ConnectedToDoList);

export default ToDoList;
