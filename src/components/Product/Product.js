import { useState } from 'react';
import { products } from "../../store/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import product from "../../assets/american.png";

const Product = (props) => {
    const [productCounter, setProductCounter] = useState(1);

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
        <div className={products.product}>
            <div className={products.productCol}>
                <img src={product} alt="productImage" className="product-image" />
                    <div className={products.productCount}>
                        <button className={products.editCount} onClick={decreaseCounterHandler} ><FontAwesomeIcon icon={faMinus}/></button>
                        <div className="counter">{productCounter}</div>
                        <button className={products.editCount} onClick={increaseCounterHandler} ><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
            </div>
            <div className={products.productCol}>
                <div className={products.productDesc}>
                    <div className={products.productDescHeader}>
                        <div className={products.productName}>{props.name}</div>
                        <div className={products.productPrice}>$ 0.98</div>
                    </div>
                    <div className={products.productDescText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa
                        tincidunt. Sed id semper risus in hendrerit.
                    </div>
                </div>

                <button className={products.productBtn}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default Product;