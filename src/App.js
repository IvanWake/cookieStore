import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, dbFirestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuth } from './store/auth-store';
import { useCart } from './store/cart-store';
import { AnimatePresence } from 'framer-motion';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import MobileHome from './pages/mobile/MobileHome';
import MobileCart from './pages/mobile/MobileCart';
import MobileOrders from './pages/mobile/MobileOrders';
import MobileAddresses from './pages/mobile/MobileAddresses';
import MobileProfile from './pages/mobile/MobileProfile';

const App = () => {
  // Задаём юзера
  const setUser = useAuth(state => state.setUserData);

  // Подгрузка данных
  const setIsUserAuth = useAuth(state => state.setIsUserAuth);
  const setUserData = useAuth(state => state.setUserData);
  const isUserAuth = useAuth(state => state.isUserAuth);
  const setCartProductsAuthUser = useCart(
      state => state.setCartProductsAuthUser);

  // Для прогрузки
  const setIsUserLoading = useAuth(state => state.setIsUserLoading);

  const getUserCart = async (uId) => {
    try {
      const docRef = doc(dbFirestore, 'carts', uId);
      const docSnap = await getDoc(docRef);
      if (docSnap.data().cart) {
        setCartProductsAuthUser(docSnap.data().cart);
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsUserLoading(false);
      if (user) {
        setUser({
          email: user.email, id: user.uid, token: user.accessToken,
        });
        setIsUserAuth(true);
        getUserCart(user.uid);
      } else {
        setIsUserAuth(false);
      }
      setIsUserLoading(true);
    });
  }, []);

  return (<>

    {window.innerWidth <= 768 ? <Switch>
      <Route path="/" exact>
        <Redirect to="/home"/>
      </Route>
      <Route path="/home" exact>
        <AnimatePresence><MobileHome/></AnimatePresence>
      </Route>
      <Route path="/cart" exact>
        <AnimatePresence><MobileCart/></AnimatePresence>
      </Route>
      <Route path="/addresses" exact>
        <AnimatePresence><MobileAddresses/></AnimatePresence>
      </Route>
      <Route path="/orders" exact>
        <AnimatePresence><MobileOrders/></AnimatePresence>
      </Route>
      <Route path="/profile" exact>
        <AnimatePresence><MobileProfile/></AnimatePresence>
      </Route>

      <Route path="*">
        <NotFound/>
      </Route>
    </Switch> : <Switch>
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
      <Route path="/reset" exact>
        <AnimatePresence><ForgotPassword/></AnimatePresence>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>

    }

  </>);
};

export default App;
