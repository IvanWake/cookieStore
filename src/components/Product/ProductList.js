import React from "react";
import { products } from "../../store/styles";
import { useProducts } from "../../store/products-store";
import Product from "./Product";

const ProductList = () => {
    const category = useProducts(state => state.selectedCategory);

    const productsList = [
        {
            category: 'Cookies',
            name: 'American',
        },
        {
            category: 'Cookies',
            name: 'American1',
        },
        {
            category: 'Sweets',
            name: 'Moti1',
        },
        {
            category: 'Sweets',
            name: 'Moti2',
        },
    ];

    let productsListFiltered = productsList.filter((product) =>
        product.category === category)

    if (category === 'All') {
        productsListFiltered = productsList;
    }

    return (
        <div className={products.productList}>
            {
                productsListFiltered.map(product => (
                    <Product
                        key={'key1'}
                        name={product.name}
                    />
                ))
            }
        </div>
    );
}

export default ProductList;