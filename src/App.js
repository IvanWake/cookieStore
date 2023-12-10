import React, { Fragment } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Home from "./components/Home";
import Header from "./components/Layout/Header"

const App = () => {
  return (
      <Fragment>
          <Header/>
          <Switch>
              <Route path="/" exact>
                  <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                  <Home/>
              </Route>
              <Route path='*'>
                  <NotFound/>
              </Route>
          </Switch>
      </Fragment>
  );
}

export default App;
