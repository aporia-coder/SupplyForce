import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

// Pages
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";

// Components
import { Navbar } from "./components/Navbar";

// MUI

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3260a8",
      secondary: "#FFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Switch>
          <Home />
        </Switch>
        <Test />
      </div>
    </ThemeProvider>
  );
}

export default App;
