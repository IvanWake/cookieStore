import {useEffect, useState} from "react";
import { fetchLocalProducts, getTotalPrice } from '../../service/cart';
import { useAuth } from "../../store/auth-store";
import { useCart } from '../../store/cart-store';
import { cart } from "../../store/styles";

const CartFooter = () => {
    const [totalPrice, setTotalPrice] = useState()
    const isUserAuth = useAuth(state => state.isUserAuth);
    const cartProductsAuthUser = useCart(state => state.cartProductsAuthUser)

    useEffect(() => {
        if (isUserAuth) {
            setTotalPrice(`${getTotalPrice(cartProductsAuthUser).totalPrice.toFixed(2)}`);
        } else {
            setTotalPrice(`${getTotalPrice(fetchLocalProducts().filteredProducts).totalPrice.toFixed(2)}`);
        }
    }, [cartProductsAuthUser])

    return (
        <div className={cart.footer}>
            <div className={cart.total}>
                <p>Total</p>
                <p>$ {totalPrice}</p>
            </div>
            <button className={cart.footerButton}>Place order</button>
        </div>
    );
}

export default CartFooter;