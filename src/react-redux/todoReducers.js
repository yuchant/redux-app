import {
  ADD_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from "./todoActions";

const log = console.log.bind(this, "[todoReducers.js]");

export default (todos = [], action) => {
  log("TODOS IS: ", todos);
  console.log("action", action);
  if (!action) {
    return todos;
  }
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          text: "",
          placeholder: action.placeholder,
          index: todos.length,
          complete: false
        }
      ];

    case UPDATE_TODO:
      // it seems like the input should maintain local state
      // and call update once, but its not like we're building a code editor
      log("Updating item of index: ", action.index);
      let todosUpdated = todos.slice();
      // note we are using index as ID. Need some way to detect which item is being modified.
      todosUpdated[action.index].text = action.text;
      return todosUpdated;

    case COMPLETE_TODO:
      todosUpdated = todos.slice();
      let todo = todosUpdated[action.index];
      if (todo.text.length == 0) {
        log(
          "Trying to skip / not enable button due to text being empty, but props aren't tied to state"
        );
        return todos;
      }
      todo.complete = action.complete;
      return todosUpdated;

    case DELETE_TODO:
      todosUpdated = todos.slice();
      todosUpdated.splice(action.index, 1);
      // reindex
      todosUpdated.forEach((todo, i) => {
        todo.index = i;
      });
      return todosUpdated;
    default:
      return todos;
  }
};
