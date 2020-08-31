import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
function App() {
  const BlankPage = () => (
    <div>
      <h1>BlankPage</h1>
    </div>
  );

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blank" component={BlankPage} />
      </Switch>
    </div>
  );
}

export default App;
