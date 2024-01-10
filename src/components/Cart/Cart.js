import { useState, useEffect } from "react";
import { cart } from "../../store/styles";
import CartProduct from "./CartProduct";
import { useCart } from "../../store/cart-store";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState();
    const productInStorage = useCart(state => state.cartProductsLocal);

    const fetchLocalProducts = () => {
        const storageLength = localStorage.length;
        let productsCart = [];
        for (let i = 0; i < storageLength; i++) {
            productsCart.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        setCartProducts(productsCart);
    }

    useEffect(() => {
        fetchLocalProducts();
    }, [productInStorage]);

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
                        cartProducts?.map(product => (
                            <CartProduct
                                key={'cpId ' + Math.random()}
                                id={'cpId ' + Math.random()}
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