export const ADD_MICROSTEP = "ADD_MICROSTEP";
export const COMPLETE_MICROSTEP = "COMPLETE_MICROSTEP";
export const UPDATE_MICROSTEP = "UPDATE_MICROSTEP";
export const DELETE_MICROSTEP = "DELETE_MICROSTEP";

const log = console.log.bind(this, "[actionCreators.js]");

export const addMicroStep = (microstep) => {
  // QUESTION: How do we have this action depend on state?
  // e.g. global placeholder value from pulled settings
  const action = {
    type: ADD_MICROSTEP,
    microstep: microstep
  };
  log("Created ADD_MICROSTEP action:", action);
  return action;
};

export const updateMicroStep = (text, id) => {
  const action = {
    type: UPDATE_MICROSTEP,
    text: text,
    id: id
  };
  log("Created UPADTE_MICROSTEP action:", action);
  return action;
};

export const completeMicroStep = (complete, id) => {
  return {
    type: COMPLETE_MICROSTEP,
    id: id,
    complete: complete
  };
};

export const deleteMicroStep = id => {
  return {
    type: DELETE_MICROSTEP,
    id: id
  };
};