// Module
import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home/";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
