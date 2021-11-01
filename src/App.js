import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import "./App.css";
import { LeadPanel } from "./pages/LeadPanel";
import { CreateLead } from "./pages/CreateLead";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lead-panel">
          <LeadPanel />
        </Route>
        <Route path="/create-lead">
          <CreateLead />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
