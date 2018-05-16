import { combineReducers } from "redux";
import { RECEIVE_DATA, GET_DATA } from "./dataActions";
import data from "./dataReducers";
import todos from "./todoReducers";
import cards from "./cardsReducers";
import ui from "./uiReducers";

const log = console.log.bind(this, "[reducers.js]");

const combinedReducers = (state = {}, action) => {
  // we can't use combineReducers because it rejects all previous states not passed
  // to combineReducers
  return Object.assign({}, state, {
    todos: todos(state.todos, action),
    cards: cards(state.cards, action),
    ui: ui(state.ui, action)
  });
};

const rootReducer = (state, action) => {
  const initialState = data(state, action);
  return combinedReducers(initialState, action);

  // can't use combineReducers because it strips all state not explicitly passed to combineReducers
  // such as our global data population reducer (which populates both todos and cards at once.)
  // need SOLVE.
  const finalState = combineReducers({
    todos,
    cards
  })(newState, action);
  log("Final State: ", finalState);
  return finalState;
};

export default rootReducer;
