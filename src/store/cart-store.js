import {create} from 'zustand';
import {updateUserCart} from "../service/cart";

export const useCart = create(set => ({
    isCartVisible: false,
    changeVisibilty: (stateVisibility) => set(state => {
        return {isCartVisible: stateVisibility};
    }),
    cartProductsLocal: 1,
    cartProductsLocalHandler: () => set(state => {
        return {cartProductsLocal: state.cartProductsLocal + 1}
    }),
    cartProductsAuthUser: [],
    updateCartProductsAuthUser: (addingItem, productCounter) => set(state => {

        let updatedProducts = [...state.cartProductsAuthUser];

        const productsList = [...state.cartProductsAuthUser];

        const existingProducts = productsList.findIndex(item => {
            return item.name === addingItem.name;
        })

        let existingProduct = updatedProducts[existingProducts];

        let updatedProduct;
        let updatedProductObj;
        let amount, price;

        if (existingProduct) {
            updatedProduct = {
                ...existingProduct,
                amount: existingProduct.amount + productCounter,
            }

            amount = updatedProduct.amount;
            price = updatedProduct.price;

            updatedProductObj = {
                ...updatedProduct,
                total: amount * price,
            }
            updatedProducts[existingProducts] = updatedProductObj;
        } else {
            updatedProducts = productsList.concat(addingItem);
        }

        return {cartProductsAuthUser: updatedProducts};
    }),
    removeCartProductAuthUser: (item) => set(state => {
        return {cartProductsAuthUser: state.cartProductsAuthUser.filter(product => product.name !== item.name)}
    }),
    increaseCounterAuthUser: (item) => set(state => {
        return {
            cartProductsAuthUser: state.cartProductsAuthUser.map(product => {
                if (product.name === item.name) {
                    return { ...product, amount: product.amount + 1 }
                }
            })
        }
    }),
    decreaseCounterAuthUser: (item) => set((state) => ({
            cartProductsAuthUser: state.cartProductsAuthUser.map(product => {
                if (product.name === item.name) {
                    return { ...product, amount: product.amount - 1 }
                }
                return product;
            })
        })),
    setCartProductsAuthUser: (item) => set(state => {
        return {cartProductsAuthUser: item};
    }),
}))