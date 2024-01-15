import { useState } from 'react';
import { fetchLocalProducts } from '../../service/cart';
import { useCart } from "../../store/cart-store";
import { motion } from "framer-motion";
import { setProducts } from '../../service/cart';
import { products } from "../../store/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    const [btnStyles, setBtnStyles] = useState(products.productBtn);
    const [btnContent, setBtnContent] = useState('Add to Cart');
    const [productCounter, setProductCounter] = useState(1);
    const cartProductsLocal = useCart(state => state.cartProductsLocalHandler);

    const addToCartHandler = () => {

        // set styles and content for Button

        if (btnStyles === products.productAdded) {
            return;
        }

        setBtnStyles(products.productAdded);
        setBtnContent('Added to Cart');

        // Get Products (localStorage)
        const productsList = fetchLocalProducts().filteredProducts;

        const addingItem = {
            id: props.id,
            image: props.image,
            name: props.name,
            amount: productCounter,
            price: props.price,
            desc: props.description,
            total: props.price * productCounter,
            chlien: 1,
        }
        //Set Product
        setProducts(productsList, addingItem, props.id, productCounter);
        cartProductsLocal();

        setTimeout(function () {
            setBtnContent('Add to Cart');
            setBtnStyles(products.productBtn);
        }, 1000);
    }

    const increaseCounterHandler = () => {
        if (productCounter === 10) {
            return;
        }
        setProductCounter(prevState => prevState + 1);
    }

    const decreaseCounterHandler = () => {
        if (productCounter === 1) {
            return;
        }
        setProductCounter(prevState => prevState - 1);
    }

    return (
        <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            style={{overflow: 'hidden'}}
            transition={{duration: 0.9, ease: 'circInOut'}}
            className={products.product} key={props.key}>
            <div className={products.productCol}>
                <img src={props.image} alt="productImage" className="product-image" />
                <div className={products.productCount}>
                    <button className={products.editCount} onClick={decreaseCounterHandler}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <div className="counter">{productCounter}</div>
                    <button className={products.editCount} onClick={increaseCounterHandler}><FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className={products.productCol + ' w-full'}>
                <div className={products.productDesc}>
                    <div className={products.productDescHeader}>
                        <div className={products.productName}>{props.name}</div>
                        <div className={products.productPrice}>$ {props.price}</div>
                    </div>
                    <div className={products.productDescText}>
                        {props.description}
                    </div>
                </div>

                <button className={btnStyles} onClick={addToCartHandler}>{btnContent}</button>
            </div>
        </motion.div>
    );
}

export default Product;