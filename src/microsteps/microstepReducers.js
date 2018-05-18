import {
  ADD_MICROSTEP,
  UPDATE_MICROSTEP,
  COMPLETE_MICROSTEP,
  DELETE_MICROSTEP
} from "./microstepActions";

const log = console.log.bind(this, "[microstepReducers.js]");

const microstepReducer = (microsteps = [], action) => {
  if (!action) {
    return microsteps;
  }
  switch (action.type) {
    case ADD_MICROSTEP:
      return [
        ...microsteps,
        {
          text: "",
          placeholder: action.placeholder,
          index: microsteps.length,
          complete: false
        }
      ];

    case UPDATE_MICROSTEP:
      // it seems like the input should maintain local state
      // and call update once, but its not like we're building a code editor
      log("Updating item of index: ", action.index);
      let microstepsUpdated = microsteps.slice();
      // note we are using index as ID. Need some way to detect which item is being modified.
      microstepsUpdated[action.index].text = action.text;
      return microstepsUpdated;

    case COMPLETE_MICROSTEP:
      microstepsUpdated = microsteps.slice();
      let microstep = microstepsUpdated[action.index];
      if (microstep.text.length == 0) {
        log(
          "Trying to skip / not enable button due to text being empty, but props aren't tied to state"
        );
        return microsteps;
      }
      microstep.complete = action.complete;
      return microstepsUpdated;

    case DELETE_MICROSTEP:
      microstepsUpdated = microsteps.slice();
      microstepsUpdated.splice(action.index, 1);
      // reindex
      microstepsUpdated.forEach((microstep, i) => {
        microstep.index = i;
      });
      return microstepsUpdated;
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
