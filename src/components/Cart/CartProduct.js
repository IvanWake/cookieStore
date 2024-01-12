import { cart } from "../../store/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const CartProduct = (props) => {

    const addingItem = {
        id: props.id,
        name: props.name,
        amount: props.amount,
        price: props.price,
        desc: props.description,
        total: props.price * props.amount,
    }

    // Counter and DeleteHandler

    const increaseCounterHandler = () => props.onIncrease(addingItem);

    const decreaseCounterHandler = () => props.onDecrease(addingItem);

    const removeProductHandler = () => props.onRemoveProduct(addingItem);


    return (
        <div className={cart.product}>
            <div className={cart.productInfo}>
                <img src={props.image} alt="product" />
                <div className={cart.description}>
                    <div className={cart.productHeader}>
                        <div className={cart.name}>{props.name}</div>
                        <div onClick={removeProductHandler} className={cart.xMark}><FontAwesomeIcon icon={faXmark} /></div>
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