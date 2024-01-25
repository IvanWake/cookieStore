import { useState, useEffect } from "react";
import { useAuth } from "../../store/auth-store";
import { useCart } from "../../store/cart-store";
import { getTotalAmount } from "../../service/cart";
import { header } from '../../store/styles.js';


const CartBadge = () => {
    const [totalAmount, setTotalAmount] = useState();
    const cartProducts = useCart(state => state.cartProductsLocal);
    const isUserAuth = useAuth(state => state.isUserAuth);

    useEffect(() => {
        if (isUserAuth) {
            setTotalAmount(222);
        } else {
            setTotalAmount(getTotalAmount().totalAmount)
        }
    }, [cartProducts, isUserAuth])


    return (
        <span className={header.cartBadge}>{totalAmount}</span>
    );
}

export default CartBadge;