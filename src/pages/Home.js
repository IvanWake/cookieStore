import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import ProductList from "../components/Product/ProductList";
import Categories from "../components/Categories/Categories";

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Main>
                <Categories/>
                <ProductList />
            </Main>
        </Fragment>
    );
}

export default Home;