import { useCart } from "../store/cart-store";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import MainWrapper from "../components/Layout/MainWrapper";
import Cart from "../components/Cart/Cart";
import ProductList from "../components/Product/ProductList";
import Categories from "../components/Categories/Categories";

const Home = () => {
    const isCartVisible = useCart(state => state.isCartVisible);

    return (
        <>
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
        </>
    );
}

export default Home;