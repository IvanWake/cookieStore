import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { dbFirestore } from '../firebase';
import { useAuth } from '../store/auth-store';
import { useCart } from "../store/cart-store";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import MainWrapper from "../components/Layout/MainWrapper";
import Cart from "../components/Cart/Cart";
import ProductList from "../components/Product/ProductList";
import Categories from "../components/Categories/Categories";

const Home = () => {
    const isCartVisible = useCart(state => state.isCartVisible);

    // use UserData and him Auth Status
    const userData = useAuth(state => state.userData);
    const isUserAuth = useAuth(state => state.isUserAuth);

    // Set Products
    const setCartProductsAuthUser = useCart(state => state.setCartProductsAuthUser);

    const getUserCart = async () => {
        try {
            const docRef = doc(dbFirestore, 'carts', userData.id);
            const docSnap = await getDoc(docRef);

            setCartProductsAuthUser(docSnap.data().cart);
        } catch (error) {}
    };

    useEffect(() => {
        if (isUserAuth) {
            getUserCart();
        }
    }, [isUserAuth, userData])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            style={{ overflow: 'hidden' }}
            transition={{ duration: .3 }}
        >
            <Header />
            <Main>
                <MainWrapper>
                    <Categories />
                    <ProductList />
                </MainWrapper>
                <AnimatePresence>
                    {isCartVisible && <Cart />}
                </AnimatePresence>
            </Main>
        </motion.div>
    );
}

export default Home;