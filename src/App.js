import {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {auth, dbFirestore} from './firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {useAuth} from './store/auth-store';
import {useCart} from './store/cart-store';
import {AnimatePresence} from 'framer-motion';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import {doc, getDoc} from "firebase/firestore";

const App = () => {
  // Задаём юзера
  const setUser = useAuth(state => state.setUserData);

  // Подгрузка данных
  const setIsUserAuth = useAuth(state => state.setIsUserAuth);
  const setUserData = useAuth(state => state.setUserData);
  const isUserAuth = useAuth(state => state.isUserAuth);
  const setCartProductsAuthUser = useCart(state => state.setCartProductsAuthUser);


  // Для прогрузки
  const setIsUserLoading = useAuth(state => state.setIsUserLoading);

  const getUserCart = async (uId) => {
    try {
      const docRef = doc(dbFirestore, 'carts', uId);
      const docSnap = await getDoc(docRef);
      if (docSnap.data().cart) {
        setCartProductsAuthUser(docSnap.data().cart);
      }
    } catch (error) {}
  };

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
        getUserCart(user.uid);
      } else {
        setIsUserAuth(false);
        setUserData({});
      }
      setIsUserLoading(true);
    });
  }, []);

  return (
      <>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"/>
          </Route>
          <Route path="/home" exact>
            <AnimatePresence><Home/></AnimatePresence>
          </Route>
          <Route path="/login" exact>
            <AnimatePresence><LogIn/></AnimatePresence>
          </Route>
          <Route path="/signup" exact>
            <AnimatePresence><SignUp/></AnimatePresence>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </>
  );
};

export default App;