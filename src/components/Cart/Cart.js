import {doc, getDoc} from 'firebase/firestore';
import {useState, useEffect} from 'react';
import {dbFirestore} from '../../firebase';

import {useAuth} from '../../store/auth-store';
import {useCart} from '../../store/cart-store';
import {cart} from '../../store/styles';
import {motion, AnimatePresence} from 'framer-motion';
import {fetchLocalProducts} from '../../service/cart';
import CartFooter from './CartFooter';
import CartProductsList from './CartProductsList';

const Cart = (props) => {
  const [cartItems, setCartItems] = useState();
  const productInStorage = useCart(state => state.cartProductsLocal);
  const cartProductsAuthUser = useCart(state => state.cartProductsAuthUser);
  const setCartProductsAuthUser = useCart(state => state.setCartProductsAuthUser);

  const setCartProductsNonAuthUser = useCart(state => state.setCartProductsNonAuthUser);
  const cartProductsNonAuthUser = useCart(state => state.cartProductsNonAuthUser);

  const isUserAuth = useAuth(state => state.isUserAuth);

  // DataBase
  const userData = useAuth(state => state.userData);

  const getUserCart = async () => {
    try {
      const docRef = doc(dbFirestore, 'carts', userData.id);
      const docSnap = await getDoc(docRef);

      setCartProductsAuthUser(docSnap.data().cart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isUserAuth) {
      getUserCart();
    } else {
      setCartItems(fetchLocalProducts().filteredProducts);
    }
  }, [isUserAuth, productInStorage])

  return (
      <motion.div
          initial={{height: 0, opacity: 0}}
          animate={{height: '85vh', opacity: 1}}
          exit={{height: 0, opacity: 0}}
          style={{overflow: 'hidden'}}
          className={cart.wrapper}
      >
        <div className={cart.cart}>
          <div className={cart.header}>Cart</div>
          <div className={cart.method}>
            <button className={cart.button}>Delivery</button>
            <button className={cart.button}>Take away</button>
          </div>
          <AnimatePresence>
            <CartProductsList cartItems={ isUserAuth ? cartProductsAuthUser : cartItems } />
          </AnimatePresence>
          <CartFooter/>
        </div>
      </motion.div>
  );
};

export default Cart;