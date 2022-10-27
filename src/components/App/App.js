import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";

function App() {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies loggedIn={loggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
