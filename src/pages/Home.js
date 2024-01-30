import {doc, getDoc} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {dbFirestore} from '../firebase';
import {fetchLocalProducts} from '../service/cart';
import {useAuth} from '../store/auth-store';
import { useCart } from "../store/cart-store";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import MainWrapper from "../components/Layout/MainWrapper";
import Cart from "../components/Cart/Cart";
import ProductList from "../components/Product/ProductList";
import Categories from "../components/Categories/Categories";

const Home = () => {
    const [cartItems, setCartItems] = useState();
    const isCartVisible = useCart(state => state.isCartVisible);
    const userData = useAuth(state => state.userData);

    const cartProductsAuthUser = useCart(state => state.cartProductsAuthUser);
    const setCartProductsAuthUser = useCart(state => state.setCartProductsAuthUser);

    const setCartProductsNonAuthUser = useCart(state => state.setCartProductsNonAuthUser);
    const cartProductsNonAuthUser = useCart(state => state.cartProductsNonAuthUser);

    const isUserAuth = useAuth(state => state.isUserAuth);





    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            style={{overflow: 'hidden'}}
            transition={{ duration: .3 }}
        >
            <Header />
            <Main>
                <MainWrapper>
                    <Categories />
                    <ProductList />
                </MainWrapper>
                <AnimatePresence>
                    { isCartVisible && <Cart />}
                </AnimatePresence>
            </Main>
        </motion.div>
    );
}

export default Home;