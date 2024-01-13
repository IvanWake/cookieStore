import { useState, useEffect } from "react";
import { useCart } from "../../store/cart-store";
import { cart } from "../../store/styles";
import { fetchLocalProducts } from "../../service/get-products";
import CartFooter from "./CartFooter";
import CartProductsList from "./CartProductsList";

const Cart = () => {
    const [cartItems, setCartItems] = useState();
    const productInStorage = useCart(state => state.cartProductsLocal);

    useEffect(() => {
        setCartItems(fetchLocalProducts().productsCart);
        console.log(productInStorage);
    }, [productInStorage]);

    return (
        <div className={cart.wrapper}>
            <div className={cart.cart}>
                <div className={cart.header}>Cart</div>
                <div className={cart.method}>
                    <button className={cart.button}>Delivery</button>
                    <button className={cart.button}>Take away</button>
                </div>
                <CartProductsList cartItems={cartItems}/>
                <CartFooter />
            </div>
        </div>

    );
}

export default Cart;