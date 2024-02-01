import { useEffect } from "react";
import { useProducts } from "../../store/products-store";
import { sortByPrice } from "../../service/products";
import { database } from "../../firebase";
import { AnimatePresence } from "framer-motion";
import { ref, onValue } from "firebase/database";
import { products } from "../../store/styles";
import Product from "./Product";
import Preloader from "../Layout/Preloader";
import { useState } from "react";

const ProductList = () => {
    const [isProductsLoading, setIsProductsLoading] = useState(true);

    // Get category and sortMethod
    const category = useProducts(state => state.selectedCategory);
    const sortMethod = useProducts(state => state.sortMethod);
    
    // Get and Set Products in Global State
    const setProducts = useProducts(state => state.setProducts);
    const productsList = useProducts(state => state.products);
    const setProductsList = useProducts(state => state.setProductsList);
    
    const urlProducts = "https://img.cookiestore.ru/";

    const fetchProducts = () => {
        setIsProductsLoading(true);
        const productsResponse = ref(database, 'products');
        onValue(productsResponse, (snapshot) => {
            const data = snapshot.val();
            setProducts(data);
            setProductsList(data);
            setIsProductsLoading(false);
        });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    let productsListFiltered = productsList?.filter((product) =>
        product.category.toLowerCase() === category.toLowerCase()
    );

    // Get All products, if All categories selected
    if (category === 'All') productsListFiltered = productsList;

    // Sorting price by Ascending and Descending
    productsListFiltered = sortByPrice(productsListFiltered, sortMethod).sortedItems;

    let content;

    if (isProductsLoading) {
        content = <div className="flex items-center justify-center flex-center"><Preloader width={'300px'} /></div>
    } else {
        content = productsListFiltered?.map(product => (
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

    return (
        <div className={products.productList}>
            <AnimatePresence>
                {content}
            </AnimatePresence>
        </div>
    );
}

export default ProductList;