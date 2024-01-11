import { useState } from 'react';
import { fetchLocalProducts } from '../../service/get-products';
import { setProducts } from '../../service/set-products';
import { cart } from "../../store/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import product from "../../assets/american.png";

const CartProduct = (props) => {
    const amount = props.amount;

    const addingItem = {
        id: props.id,
        name: props.name,
        amount: props.amount,
        price: props.price,
        desc: props.description,
        total: props.price * props.amount,
    }

    const increaseCounterHandler = () => props.onIncrease(addingItem);

    const decreaseCounterHandler = () => props.onDecrease(addingItem);

    return (
        <div className={cart.product}>
            <div className={cart.productInfo}>
                <img src={product} alt="product" />
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