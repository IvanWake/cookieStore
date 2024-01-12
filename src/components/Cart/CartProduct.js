import { useState } from 'react';
import { cart } from "../../store/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const CartProduct = (props) => {

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
        <div className={cart.product}>
            <div className={cart.productInfo}>
                <img src={props.image} alt="product" />
                <div className={cart.description}>
                    <div className={cart.productHeader}>
                        <div className={cart.name}>{props.name}</div>
                        <div><FontAwesomeIcon icon={faXmark} /></div>
                    </div>
                    <div className={cart.counterWrapper}>
                        <div className={cart.price}>$ {props.price}/piece</div>
                        <div className={cart.productCount}>
                            <button className={cart.editCount} onClick={decreaseCounterHandler}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <div className="counter">{props.amount}</div>
                            <button className={cart.editCount} onClick={increaseCounterHandler}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;