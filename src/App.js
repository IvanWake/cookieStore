import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
      <>
          <Switch>
              <Route path="/" exact>
                  <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                  <Home/>
              </Route>
              <Route path="/login" exact>
                  <LogIn/>
              </Route>
              <Route path="/signup" exact>
                  <SignUp/>
              </Route>
              <Route path='*'>
                  <NotFound/>
              </Route>
          </Switch>
      </>
  );
}

export default App;
