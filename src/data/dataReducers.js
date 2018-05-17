// data fetching reducers
import { REQUEST_DATA, GET_DATA, RECEIVE_DATA } from "./dataActions";
const log = console.log.bind(this, "[dataReducers.js]");

const reducer = (
  state = {
    isFetching: false,
    dataReducerDefault: true,
    todos: {
      items: [],
      progress: 0
    },
    cards: [],
    cardsByID: []
  },
  action
) => {
  log("Action received: ", action);
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_DATA:
      log("RECEIVE DATA", action, state);
      let results = Object.assign({}, state, {
        isFetching: false,
        receivedAt: action.receivedAt,
        receivedData: true,
        ...action.data,
        todos: {
          items: action.data.todos
        }
      });
      log("Calculated new state: ", results);
      return results;
    default:
      log("Default:", state);
      return state;
  }
};

export default reducer;
