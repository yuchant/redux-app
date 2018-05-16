export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

const log = console.log.bind(this, "[actionCreators.js]");

export const addToDoItem = (placeholder = "Default Placeholder") => {
  // QUESTION: How do we have this action depend on state?
  // e.g. global placeholder value from pulled settings
  const action = {
    type: ADD_TODO,
    placeholder: placeholder
  };
  log("Created ADD_TODO action:", action);
  return action;
};

export const updateToDoItem = (text, index) => {
  const action = {
    type: UPDATE_TODO,
    text: text,
    index: index
  };
  log("Created UPADTE_TODO action:", action);
  return action;
};

export const completeToDoItem = (complete, index) => {
  return {
    type: COMPLETE_TODO,
    index: index,
    complete: complete
  };
};

export const deleteToDoItem = index => {
  return {
    type: DELETE_TODO,
    index: index
  };
};
