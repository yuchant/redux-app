import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { RECEIVE_DATA, GET_DATA } from "./data/dataActions";
import data from "./data/dataReducers";
import microsteps from "./microsteps/microstepReducers";
import cards from "./cards/cardsReducers";
import ui from "./ui/uiReducers";
import journeys from "./journeys/journeysReducers";

const log = console.log.bind(this, "[reducers.js]");

const combinedReducers = (state = {}, action) => {
  // we can't use combineReducers because it rejects all previous states not passed
  // to combineReducers
  return Object.assign({}, state, {
    microsteps: microsteps(state.microsteps, action),
    cards: cards(state.cards, action),
    ui: ui(state.ui, action),
    journeys: journeys(state.journeys, action),
    router: routerReducer
  });
};

const rootReducer = (state, action) => {
  const initialState = data(state, action);
  return combinedReducers(initialState, action);
};

export default rootReducer;
