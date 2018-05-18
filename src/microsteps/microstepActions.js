export const ADD_MICROSTEP = "ADD_MICROSTEP";
export const COMPLETE_MICROSTEP = "COMPLETE_MICROSTEP";
export const UPDATE_MICROSTEP = "UPDATE_MICROSTEP";
export const DELETE_MICROSTEP = "DELETE_MICROSTEP";

const log = console.log.bind(this, "[actionCreators.js]");

export const addMicroStep = (placeholder = "Default Placeholder") => {
  // QUESTION: How do we have this action depend on state?
  // e.g. global placeholder value from pulled settings
  const action = {
    type: ADD_MICROSTEP,
    placeholder: placeholder
  };
  log("Created ADD_MICROSTEP action:", action);
  return action;
};

export const updateMicroStep = (text, index) => {
  const action = {
    type: UPDATE_MICROSTEP,
    text: text,
    index: index
  };
  log("Created UPADTE_MICROSTEP action:", action);
  return action;
};

export const completeMicroStep = (complete, index) => {
  return {
    type: COMPLETE_MICROSTEP,
    index: index,
    complete: complete
  };
};

export const deleteMicroStep = index => {
  return {
    type: DELETE_MICROSTEP,
    index: index
  };
};
