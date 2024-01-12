import { useState } from 'react';
import { fetchLocalProducts } from '../../service/get-products';
import { useCart } from "../../store/cart-store";
import { setProducts } from '../../service/set-products';
import { products } from "../../store/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import product from "../../assets/american.png";

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
        const productsList = fetchLocalProducts().productsCart; 

        const addingItem = {
            id: props.id,
            name: props.name,
            amount: productCounter,
            price: props.price,
            desc: props.description,
            total: props.price * productCounter,
        }
        
        //Set Product
        setProducts(productsList, addingItem, props.id, productCounter);
        cartProductsLocal(productsList);
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
        <div className={products.product} key={props.key}>
            <div className={products.productCol}>
                <img src={product} alt="productImage" className="product-image"/>
                <div className={products.productCount}>
                    <button className={products.editCount} onClick={decreaseCounterHandler}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </button>
                    <div className="counter">{productCounter}</div>
                    <button className={products.editCount} onClick={increaseCounterHandler}><FontAwesomeIcon
                        icon={faPlus}/>
                    </button>
                </div>
            </div>
            <div className={products.productCol}>
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
        </div>
    );
}

export default Product;