import fetch from "cross-fetch";

export const REQUEST_DATA = "REQUEST_DATA";
export const requestData = () => {
  return {
    type: REQUEST_DATA
  };
};

export const RECEIVE_DATA = "RECEIVE_DATA";
export const receiveData = data => {
  console.log("GENERATING RECEIVE DATA ACTION");
  return {
    type: RECEIVE_DATA,
    data: data,
    receivedAt: Date.now()
  };
};

const getData = dispatch => {
  // First dispatch: the app state is updated to inform
  // that the API call is starting.

  dispatch(requestData());
  // The function called by the thunk middleware can return a value,
  // that is passed on as the return value of the dispatch method.

  // In this case, we return a promise to wait for.
  // This is not required by thunk middleware, but it is convenient for us.

  return fetch("./data.json")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => {
      // Here, we update the app state with the results of the API call
      console.log("JSON", json);
      setTimeout(() => {
        dispatch(receiveData(json));
      }, 500);
    });
};

export default getData;
