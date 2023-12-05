import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/Products/ProductsList";

const App = () => {
  return (
    <Fragment>
      <Header />
      <ProductsList />
      <Footer />
    </Fragment>
  );
}

export default App;
