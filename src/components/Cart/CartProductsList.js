import { useCart } from "../../store/cart-store";
import { AnimatePresence } from "framer-motion";
import { setProducts } from "../../service/cart";
import { cart } from "../../store/styles";
import CartProduct from "./CartProduct";

const CartProductsList = (props) => {

    const cartProductsLocal = useCart(state => state.cartProductsLocalHandler);

    const increaseHandler = (updatingItem) => {
        setProducts(props.cartItems, updatingItem, updatingItem.id, 1);
        cartProductsLocal();
    }

    const decreaseHandler = (updatingItem) => {
        if (updatingItem.amount === 1) {
            return;
        }

        setProducts(props.cartItems, updatingItem, updatingItem.id, -1);
        cartProductsLocal();
    }

    const removeProductHandler = (removingItem) => {
        localStorage.removeItem(removingItem.id);
        cartProductsLocal();
    }

    return (
        <div className={cart.productList}>
            <AnimatePresence>
                {
                    props.cartItems?.map(product => (
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
}

export default CartProductsList;