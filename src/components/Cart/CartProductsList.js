import { useCart } from '../../store/cart-store';
import { AnimatePresence } from 'framer-motion';
import { setProducts } from '../../service/cart';
import { cart } from '../../store/styles';
import CartProduct from './CartProduct';

const CartProductsList = (props) => {

  const { cartProductsLocal, cartProductsLocalHandler } = useCart();

  const increaseHandler = (updatingItem) => {
    setProducts(props.cartProducts, updatingItem, updatingItem.id, 1);
    cartProductsLocalHandler();
  };

  const decreaseHandler = (updatingItem) => {
    if (updatingItem.amount === 1) {
      return;
    }
    setProducts(props.cartProducts, updatingItem, updatingItem.id, -1);
    cartProductsLocalHandler();
  };

  const removeProductHandler = (removingItem) => {
    localStorage.removeItem(removingItem.id);
    cartProductsLocalHandler();
  };

  return (
      <div className={cart.productList}>
        <AnimatePresence>
          {
            props.cartProducts?.map(product => (
                <CartProduct
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    desc={product.desc}
                    amount={product.amount}
                    total={product.total}
                    onIncrease={increaseHandler}
                    onDecrease={decreaseHandler}
                    onRemoveProduct={removeProductHandler}
                />
            ))
          }
        </AnimatePresence>
      </div>
  );
};

export default CartProductsList;