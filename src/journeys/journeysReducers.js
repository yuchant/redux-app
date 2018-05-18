import * as journeyActions from "./journeysActions";
import { push } from "react-router-redux";

const log = console.log.bind(this, "[journeyReducers.js]");

const topics = (topics, action) => {
  switch (action.type) {
    case journeyActions.TOGGLE_TOPIC:
      let newTopics = topics.slice();
      let index = newTopics.indexOf(action.topic);
      newTopics[index].selected = !newTopics[index].selected;
      return newTopics;
    default:
      return topics;
  }
};

const root = (state = {}, action) => {
  switch (action.type) {
    case journeyActions.COMPLETE_CONFIGURATION:
      return Object.assign({}, state, {
        hasConfigured: true,
        myTopics: state.topics.filter(topic => topic.selected)
      });
    default:
      return state;
  }
};

export default (
  state = {
    hasConfigured: false,
    topics: [],
    myTopics: [],
    myArticleCards: []
  },
  action
) => {
  const rootState = root(state, action);
  console.log("Result", rootState);
  return Object.assign({}, rootState, {
    topics: topics(state.topics, action)
  });
};
