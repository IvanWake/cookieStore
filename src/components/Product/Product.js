import { useState } from 'react';
import { products } from "../../store/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import product from "../../assets/american.png";

const Product = (props) => {
    const [btnStyles, setBtnStyles] = useState(products.productBtn);
    const [btnContent, setBtnContent] = useState('Add to Cart');
    const [productCounter, setProductCounter] = useState(1);

    const setStylesBtnHandler = () => {
        if (btnStyles === products.productAdded) {
            return;
        }

        setBtnStyles(products.productAdded);
        setBtnContent('Added to Cart');

        const storageLength = localStorage.length;
        let productsList = [];
        const addingItem = {
            id: props.id,
            name: props.name,
            amount: productCounter,
        }

        for (let i = 0; i < storageLength; i++) {
            productsList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }

        const existingProducts = productsList.findIndex(item => {
            return item.name === addingItem.name;
        })

        let existingProduct = productsList[existingProducts];
        let updatedProduct;

        if (existingProduct) {
            updatedProduct = {
                ...existingProduct,
                amount: existingProduct.amount + productCounter
            }
            localStorage.setItem(existingProduct.id, JSON.stringify(updatedProduct));
        } else {
            localStorage.setItem(props.id, JSON.stringify(addingItem));
        }

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

                <button className={btnStyles} onClick={setStylesBtnHandler}>{btnContent}</button>
            </div>
        </div>
    );
}

export default Product;