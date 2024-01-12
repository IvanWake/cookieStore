import { useState, useEffect, useCallback } from "react";
import { useCart } from "../../store/cart-store";
import { cart } from "../../store/styles";
import { fetchLocalProducts } from "../../service/get-products";
import CartProduct from "./CartProduct";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState();
    const productInStorage = useCart(state => state.cartProductsLocal);
    const cartProductsLocalHandler = useCart(state => state.cartProductsLocalHandler);

    const fetchProductsLocal = () => {
        const productsList = fetchLocalProducts().productsCart;
        setCartProducts(productsList);
    }

    const setCartProductsLocalHandler = useCallback(() => {
        cartProductsLocalHandler(cartProducts)
    }, [cartProductsLocalHandler, cartProducts])

    useEffect(() => {
        fetchProductsLocal();
        setCartProductsLocalHandler();
    }, [productInStorage, setCartProductsLocalHandler]);

    return (
        <div className={cart.wrapper}>
            <div className={cart.cart}>
                <div className={cart.header}>Cart</div>
                <div className={cart.method}>
                    <button className={cart.button}>Delivery</button>
                    <button className={cart.button}>Take away</button>
                </div>
                <div className={cart.productList}>
                    {
                        productInStorage?.map(product => (
                            <CartProduct
                                key={'cpId ' + Math.random()}
                                id={'cpId ' + Math.random()}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                amount={product.amount}
                            />
                        ))
                    }
                </div>
                <div className={cart.footer}>
                    <div className={cart.total}>
                        <p>Total</p>
                        <p>$ 2.00</p>
                    </div>
                    <button className={cart.footerButton}>Place order</button>
                </div>
            </div>
        </div>

    );
}

export default Cart;