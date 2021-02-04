import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
