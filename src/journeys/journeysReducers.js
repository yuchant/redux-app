const log = console.log.bind(this, "[journeyReducers.js]");
import { TOGGLE_TOPIC } from "./journeysActions";

const topics = (topics, action) => {
  switch (action.type) {
    case TOGGLE_TOPIC:
      let newTopics = topics.slice();
      console.log("Finding topic index", topics, action);
      let index = newTopics.indexOf(action.topic);
      newTopics[index].selected = !newTopics[index].selected;
      return newTopics;
    default:
      return topics;
  }
};

export default (
  state = {
    hasConfigured: false,
    topics: []
  },
  action
) => {
  return Object.assign({}, state, {
    topics: topics(state.topics, action)
  });
};
