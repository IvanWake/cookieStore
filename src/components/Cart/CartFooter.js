import { getTotalPrice } from "../../service/cart";
import { useAuth } from "../../store/auth-store";
import { cart } from "../../store/styles";

const CartFooter = () => {
    const isUserAuth = useAuth(state => state.isUserAuth);

    let totalPrice;

    if (isUserAuth) {
        totalPrice = 'YES';
    } else {
        totalPrice = `${getTotalPrice().totalPrice.toFixed(2)}`;
    }

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