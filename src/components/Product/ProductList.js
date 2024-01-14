import { useState, useEffect } from "react";
import { useProducts } from "../../store/products-store";
import { database } from "../../firebase";
import { AnimatePresence } from "framer-motion";
import { ref, onValue } from "firebase/database";
import { products } from "../../store/styles";
import Product from "./Product";

const ProductList = () => {
    const category = useProducts(state => state.selectedCategory);
    const [productsList, setProductsList] = useState();
    const urlProducts = "https://img.cookiestore.ru/";

    const fetchProducts = () => {
        const productsResponse = ref(database, 'products');
        onValue(productsResponse, (snapshot) => {
            const data = snapshot.val();
            setProductsList(data);
        });
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    let productsListFiltered = productsList?.filter((product) =>
        product.category === category);

    if (category === 'All') {
        productsListFiltered = productsList;
    }

    return (
        <div className={products.productList}>
            <AnimatePresence>
                {
                    productsListFiltered?.map(product => (
                        <Product
                            key={'pId ' + Math.random()}
                            id={'pId ' + Math.random()}
                            image={urlProducts + product.category + '/' + product.image + '.png'}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                        />
                    ))
                }
            </AnimatePresence>
        </div>
    );
}

export default ProductList;