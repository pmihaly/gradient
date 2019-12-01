/* eslint-disable react/jsx-filename-extension */
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";
import NavbarComponent from "./components/NavbarComponent";
import * as serviceWorker from "./serviceWorker";
import Home from "./views/Home";
import Settings from "./views/Settings";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <NavbarComponent />
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </CssBaseline>
    </MuiThemeProvider>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
