import { combineReducers } from "redux";
import { RECEIVE_DATA, GET_DATA } from "./data/dataActions";
import data from "./data/dataReducers";
import todos from "./todo/todoReducers";
import cards from "./cards/cardsReducers";
import ui from "./ui/uiReducers";

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
};

export default rootReducer;
