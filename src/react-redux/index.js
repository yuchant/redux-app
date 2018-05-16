import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from "./reducers";

import ToDo from "./ToDo";
import Home from "./Home";
import CardDetail from "./CardDetail";
import Navbar from "./Navbar";
import Loader from "./Loader";
import Drawer from "./Drawer";
import Footer from "./Footer";
import AppFrame from "./AppFrame";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BottomNavigation, BottomNavigationItem } from "material-ui";

import getData from "./dataActions";

const muiTheme = getMuiTheme({
  appBar: {
    height: 45
  }
});

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

store.dispatch(getData).then(() => {
  console.log("After async get data: ", store.getState());
});

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppFrame>
            <Drawer />
            <Loader />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={ToDo} />
            <Route path="/card/:id" component={CardDetail} />
            <Footer />
          </AppFrame>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
};

export default ReduxApp;
