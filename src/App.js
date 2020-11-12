import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
    <div className="App">
      {/* wrap in router so every component has access to the router */}
      <Router>
        {/* specifies that the components beneath are rendered only under certain routes */}
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
