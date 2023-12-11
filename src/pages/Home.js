import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import ProductList from "../components/Product/ProductList";

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Main>
                <ProductList />
            </Main>
        </Fragment>

    );
}

export default Home;