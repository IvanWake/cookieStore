import { useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "./store/auth-store";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { useHistory } from 'react-router-dom';

const App = () => {
    // Задаём юзера 
    const setUser = useAuth(state => state.setUserData);

    // Ставим статус залогинен или нет
    const isUserAuth = useAuth(state => state.isUserAuth);
    const setIsUserAuth = useAuth(state => state.setIsUserAuth);
    // Для прогрузки
    const setIsUserLoading = useAuth(state => state.setIsUserLoading);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsUserLoading(false);
            if (user) {
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                });
                setIsUserAuth(true);
            } else {
                setIsUserAuth(false);
            }
            setIsUserLoading(true);
          });
    }, []);

    const { push } =  useHistory();
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
