import { motion } from "framer-motion";
import { useAuth } from "../../store/auth-store";
import { useCart } from "../../store/cart-store";
import { cart } from "../../store/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const CartProduct = (props) => {

    const { isUserAuth } = useAuth();
    const { removeCartProductAuthUser, increaseCounterAuthUser, decreaseCounterAuthUser } = useCart();

    const item = {
        id: props.id,
        image: props.image,
        name: props.name,
        amount: props.amount,
        price: props.price,
        desc: props.description,
        total: props.price * props.amount,
    }

    // Counter and DeleteHandler

    const increaseCounterHandler = () => {
        if (isUserAuth) {
            increaseCounterAuthUser(item.name);
        } else {
            props.onIncrease(item);
        }

    };

    const decreaseCounterHandler = () => {
        if (isUserAuth) {
            decreaseCounterAuthUser(item.name);
        } else {
            props.onDecrease(item);
        }
    };

    const removeProductHandler = () => {
        if (isUserAuth) {
            removeCartProductAuthUser(item.name);
        } else {
            props.onRemoveProduct(item)
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={cart.product}
        >
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
        </motion.div>
    );
}

export default CartProduct;