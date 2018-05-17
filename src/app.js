import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from "./reducers";

import ToDo from "./todo/ToDo";
import Home from "./cards/Home";
import CardDetail from "./cards/CardDetail";
import Navbar from "./ui/Navbar";
import Loader from "./ui/Loader";
import Drawer from "./ui/Drawer";
import Footer from "./ui/Footer";
import AppFrame from "./ui/AppFrame";
import getData from "./data/dataActions";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

const loggerMiddleware = createLogger({
  duration: true,
  timestamp: true
});
const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware
  )
);

store.dispatch(getData).then(() => {
  console.log("After async get data: ", store.getState());
});

const ReduxApp = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <AppFrame>
            <Drawer />
            <Loader />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/micro-steps" component={ToDo} />
            <Route path="/card/:id" component={CardDetail} />
            <Footer />
          </AppFrame>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};

export default ReduxApp;
