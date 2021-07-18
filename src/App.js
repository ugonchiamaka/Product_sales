import React from "react";
import HomeScreen from "./Slack/HomeScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detailed from "./Slack/Detailed";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/Detailed/:id" component={Detailed} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
