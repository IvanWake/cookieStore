import { useState, useEffect } from "react";
import { dbFirestore } from "../../firebase";
import { collection, doc, getDoc, getDocs, where } from "firebase/firestore";
import { useAuth } from "../../store/auth-store";
import { useCart } from "../../store/cart-store";
import { cart } from "../../store/styles";
import { motion, AnimatePresence } from "framer-motion";
import { fetchLocalProducts } from "../../service/cart";
import CartFooter from "./CartFooter";
import CartProductsList from "./CartProductsList";

const Cart = () => {
    const [cartItems, setCartItems] = useState();
    const productInStorage = useCart(state => state.cartProductsLocal);
    const cartProductsAuthUser = useCart(state => state.cartProductsAuthUser);
    const setCartProductsAuthUser = useCart(state => state.setCartProductsAuthUser);

    const isUserAuth = useAuth(state => state.isUserAuth);

    // DataBase
    const userData = useAuth(state => state.userData);

    const userCartCollectionRef = collection(dbFirestore, "carts");

    useEffect(() => {
        const getUserCart = async () => {
            try {
                const docRef = doc(dbFirestore, "carts", userData.id);
                const docSnap = await getDoc(docRef);
                setCartItems(docSnap.data());
            } catch(error) {
                console.log(error);
            }
        }
        if (isUserAuth) {
            getUserCart();
        } else {
            setCartItems(fetchLocalProducts().filteredProducts);
        }
    }, [isUserAuth, productInStorage]);

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
                    <CartProductsList cartItems={cartItems?.cart} />
                </AnimatePresence>
                <CartFooter />
            </div>
        </motion.div>
    );
}

export default Cart;