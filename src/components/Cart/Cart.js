import { useState, useEffect } from "react";
import { useCart } from "../../store/cart-store";
import { cart } from "../../store/styles";
import { motion, AnimatePresence } from "framer-motion";
import { fetchLocalProducts } from "../../service/get-products";
import CartFooter from "./CartFooter";
import CartProductsList from "./CartProductsList";

const Cart = () => {
    const [cartItems, setCartItems] = useState();
    const productInStorage = useCart(state => state.cartProductsLocal);

    useEffect(() => {
        setCartItems(fetchLocalProducts().filteredProducts);
    }, [productInStorage]);

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '85vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
            className={cart.wrapper}
        >
            <div className={cart.cart}>
                <div className={cart.header}>Cart</div>
                <div className={cart.method}>
                    <button className={cart.button}>Delivery</button>
                    <button className={cart.button}>Take away</button>
                </div>
                <AnimatePresence>
                    <CartProductsList cartItems={cartItems} />
                </AnimatePresence>
                <CartFooter />
            </div>
        </motion.div>
    );
}

export default Cart;