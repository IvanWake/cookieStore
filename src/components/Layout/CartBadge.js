import { useState, useEffect } from "react";
import { useAuth } from "../../store/auth-store";
import { useCart } from "../../store/cart-store";
import { fetchLocalProducts, getTotalAmount } from '../../service/cart';
import { header } from '../../store/styles.js';


const CartBadge = () => {
    const [totalAmount, setTotalAmount] = useState();
    const cartProducts = useCart(state => state.cartProductsLocal);
    const cartProductsAuthUser = useCart(state => state.cartProductsAuthUser);
    const isUserAuth = useAuth(state => state.isUserAuth);

    useEffect(() => {
        if (isUserAuth) {
            setTotalAmount(getTotalAmount(cartProductsAuthUser).totalAmount);
        } else {
            setTotalAmount(getTotalAmount(fetchLocalProducts().filteredProducts).totalAmount)
        }
    }, [cartProducts, isUserAuth, cartProductsAuthUser])


    return (
        <span className={header.cartBadge}>{totalAmount}</span>
    );
}

export default CartBadge;