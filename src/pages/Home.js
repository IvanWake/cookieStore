import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import Categories from "../components/Categories/Categories";

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Categories/>
        </Fragment>
    );
}

export default Home;