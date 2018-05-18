import {
  ADD_MICROSTEP,
  UPDATE_MICROSTEP,
  COMPLETE_MICROSTEP,
  DELETE_MICROSTEP,
  DELETE_MICROSTEP_BY_ID,
} from "./microstepActions";

const log = console.log.bind(this, "[microstepReducers.js]");


const reindex = (microsteps) => {
  // reindex
  microsteps.forEach((microstep, i) => {
    microstep.index = i;
  });

  return microsteps
}

const microstepReducer = (microsteps = [], action) => {
  if (!action) {
    return microsteps;
  }
  let index;
  let microstep;

  switch (action.type) {
    case ADD_MICROSTEP:
      let microstepsUpdated = [
        ...microsteps.slice(),
        action.microstep
      ];
      
      return reindex(microstepsUpdated);

    case UPDATE_MICROSTEP:
      // it seems like the input should maintain local state
      // and call update once, but its not like we're building a code editor
      microstepsUpdated = microsteps.slice();
      index = microstepsUpdated.findIndex((step) => step.id == action.id)
      microstepsUpdated[index].text = action.text;
      return microstepsUpdated;

    case COMPLETE_MICROSTEP:
      microstepsUpdated = microsteps.slice();
      index = microstepsUpdated.findIndex((step) => step.id == action.id)
      microstep = microstepsUpdated[index];
      microstep.complete = action.complete;
      return microstepsUpdated;

    case DELETE_MICROSTEP_BY_ID:
      microstepsUpdated = microsteps.slice();
      return microsteps;

    case DELETE_MICROSTEP:
      microstepsUpdated = microsteps.slice();
      index = microstepsUpdated.findIndex((step) => step.id == action.id)
      microstepsUpdated.splice(index, 1);
      return reindex(microstepsUpdated);

    default:
      return microsteps;
  }
};

const calculateProgress = items => {
  if (!items.length) {
    return 0;
  }
  const completed = items.filter(microstep => microstep.complete).length;
  const progress = completed / items.length;
  return Math.ceil(progress * 100);
};

export default (
  state = {
    items: [], // these are micro steps
    progress: 0,
    completed: 0
  },
  action
) => {
  return Object.assign({}, state, {
    items: microstepReducer(state.items, action),
    progress: calculateProgress(state.items),
    completed: state.items.filter(microstep => microstep.complete).length
  });
};
