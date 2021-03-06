import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";

// middleware
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from 'redux-devtools-extension';

// theme
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

// reducers
import reducers from "./reducers";
import { getData } from "./data/dataActions";

// components
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

// ui components
import Navbar from "./ui/Navbar";
import Loader from "./ui/Loader";
import Drawer from "./ui/Drawer";
import Footer from "./ui/Footer";
import AppFrame from "./ui/AppFrame";
import NotificationBar from "./ui/NotificationBar";

// route root components
import MicroSteps from "./microsteps/MicroSteps";
import Home from "./cards/Home";
import Journeys from "./journeys/Journeys";
import JourneysConfigure from "./journeys/Configure";
import CardDetail from "./cards/CardDetail";
import Progress from "./progress/Progress";
import Account from "./auth/Account";

// fastclick - remove double tap detect 300ms delay
import initReactFastclick from "react-fastclick";

// aws
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports-manual";
import { Authenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);


initReactFastclick();

const loggerMiddleware = createLogger({
  duration: true,
  timestamp: true
});

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Listen for changes to the current location.
history.listen((location, action) => {
  // scroll to top on history changes.
  window.scrollTo(0, 0);
});
// Build the middleware for intercepting and dispatching navigation actions
const routerReduxMiddleware = routerMiddleware(history);

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      routerReduxMiddleware
      // loggerMiddleware
    ),
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
        <ConnectedRouter
          history={history}
          onUpdate={() => window.scrollTo(0, 0)}
        >
          <AppFrame>
            <Loader />
            <Drawer />
            <Navbar />
            <Route exact path="/account" component={Account} />
            <Route exact path="/auth" component={Authenticator} />
            <Route exact path="/" component={Home} />
            <Route exact path="/micro-steps" component={MicroSteps} />
            <Route exact path="/journeys" component={Journeys} />
            <Route exact path="/progress" component={Progress} />
            <Route
              exact
              path="/journeys/configure"
              component={JourneysConfigure}
            />
            <Route path="/card/:id" component={CardDetail} />
            <Footer />
            <NotificationBar />
          </AppFrame>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  );
};

export default ReduxApp;
