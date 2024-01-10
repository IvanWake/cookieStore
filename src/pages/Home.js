import React, { Fragment } from "react";
import { useCart } from "../store/cart-store";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import MainWrapper from "../components/Layout/MainWrapper";
import Cart from "../components/Cart/Cart";
import ProductList from "../components/Product/ProductList";
import Categories from "../components/Categories/Categories";

const Home = () => {
    const isCartVisible = useCart(state => state.isCartVisible);

    return (
        <Fragment>
            <Header />
            <Main>
                <MainWrapper>
                    <Categories />
                    <ProductList />
                </MainWrapper>
                { isCartVisible && <Cart /> }
            </Main>

        </Fragment>
    );
}

export default Home;