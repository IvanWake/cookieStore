import { getTotalPrice } from "../../service/cart";
import { cart } from "../../store/styles";

const CartFooter = () => {
    const totalPrice = `${getTotalPrice().totalPrice.toFixed(2)}`;

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