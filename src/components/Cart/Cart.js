import { useState, useEffect, useCallback } from "react";
import { useCart } from "../../store/cart-store";
import { cart } from "../../store/styles";
import { fetchLocalProducts } from "../../service/get-products";
import { getTotalPrice } from "../../service/get-cart-total";
import { setProducts } from "../../service/set-products";
import CartProduct from "./CartProduct";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState();

    const productInStorage = useCart(state => state.cartProductsLocal);
    const cartProductsLocalHandler = useCart(state => state.cartProductsLocalHandler);

    const totalPrice = getTotalPrice().totalPrice;

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

    const increaseHandler = (updatingItem) => {
        setProducts(productInStorage, updatingItem, updatingItem.id, 1);
    }

    const decreaseHandler = (updatingItem) => {
        if (updatingItem.amount === 1) {
            return;
        }
        setProducts(productInStorage, updatingItem, updatingItem.id, -1);
    }

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
                                name={product.name}
                                price={product.price}
                                desc={product.desc}
                                amount={product.amount}
                                total={product.total}
                                onIncrease={increaseHandler}
                                onDecrease={decreaseHandler}
                            />
                        ))
                    }
                </div>
                <div className={cart.footer}>
                    <div className={cart.total}>
                        <p>Total</p>
                        <p>$ {totalPrice}</p>
                    </div>
                    <button className={cart.footerButton}>Place order</button>
                </div>
            </div>
        </div>

    );
}

export default Cart;