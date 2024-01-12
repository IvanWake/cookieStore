import { useCart } from "../../store/cart-store";
import { setProducts } from "../../service/set-products";
import { fetchLocalProducts } from "../../service/get-products";
import { cart } from "../../store/styles";
import CartProduct from "./CartProduct";

const CartProductsList = (props) => {

    const cartProductsLocal = useCart(state => state.cartProductsLocalHandler);

    const increaseHandler = (updatingItem) => {
        setProducts(props.cartItems, updatingItem, updatingItem.id, 1);
        cartProductsLocal(fetchLocalProducts().productsCart);
    }

    const decreaseHandler = (updatingItem) => {
        if (updatingItem.amount === 1) {
            return;
        }

        setProducts(props.cartItems, updatingItem, updatingItem.id, -1);
        cartProductsLocal(fetchLocalProducts().productsCart);
    }

    const removeProductHandler = (removingItem) => {
        localStorage.removeItem(removingItem.id);
        cartProductsLocal(fetchLocalProducts().productsCart);
    }

    return (
        <div className={cart.productList}>
            {
                props.cartItems?.map(product => (
                    <CartProduct
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        desc={product.desc}
                        amount={product.amount}
                        total={product.total}
                        onIncrease={increaseHandler}
                        onDecrease={decreaseHandler}
                        onRemoveProduct={removeProductHandler}
                    />
                ))
            }
        </div>
    );
}

export default CartProductsList;