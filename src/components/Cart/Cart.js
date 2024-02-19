import {useState, useEffect} from 'react';
import {useAuth} from '../../store/auth-store';
import {useCart} from '../../store/cart-store';
import {cart} from '../../store/styles';
import {motion, AnimatePresence} from 'framer-motion';
import { fetchLocalProducts } from '../../service/cart';
import CartFooter from './CartFooter';
import CartProductsList from './CartProductsList';

const Cart = () => {
  const [cartItems, setCartItems] = useState();

  const { cartProductsAuthUser, cartProductsLocal } = useCart();
  const { isUserAuth } = useAuth();

  useEffect(() => {
    if (!isUserAuth) {
      setCartItems(fetchLocalProducts().filteredProducts);
    }
  }, [isUserAuth, cartProductsLocal]);


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
            <CartProductsList cartProducts={ isUserAuth ? cartProductsAuthUser : cartItems } />
          </AnimatePresence>
          <CartFooter/>
        </div>
      </motion.div>
  );
};

export default Cart;