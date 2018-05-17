import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

// theme
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

// reducers
import reducers from "./reducers";
import getData from "./data/dataActions";

// components
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

// ui components
import Navbar from "./ui/Navbar";
import Loader from "./ui/Loader";
import Drawer from "./ui/Drawer";
import Footer from "./ui/Footer";
import AppFrame from "./ui/AppFrame";

// route root components
import ToDo from "./todo/ToDo";
import Home from "./cards/Home";
import Journeys from "./journeys/Journeys";
import CardDetail from "./cards/CardDetail";

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
            <Route exact path="/journeys" component={Journeys} />
            <Route path="/card/:id" component={CardDetail} />
            <Footer />
          </AppFrame>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};

export default ReduxApp;
