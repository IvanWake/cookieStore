import { useState, useEffect } from "react";
import { useCart } from "../../store/cart-store";
import { getTotalAmount } from "../../service/cart";
import { header } from '../../store/styles.js';


const CartBadge = () => {
    const [totalAmount, setTotalAmount] = useState();
    const cartProducts = useCart(state => state.cartProductsLocal)

    useEffect(() => setTotalAmount(getTotalAmount().totalAmount), [cartProducts])


    return (
        <span className={header.cartBadge}>{totalAmount}</span>
    );
}

export default CartBadge;