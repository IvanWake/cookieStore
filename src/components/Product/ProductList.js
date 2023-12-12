import React from "react";
import { products } from "../../store/styles";
import Product from "./Product";
const ProductList = () => {
    return (
        <div className={products.productList}>
            <Product key={'key1'}/>
        </div>
    );
}

export default ProductList;