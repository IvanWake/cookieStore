import { create } from 'zustand';

export const useCart = create(set => ({
    isCartVisible: false,
    changeVisibilty: (stateVisibility) => set(state => {
        return { isCartVisible: stateVisibility };
    }),
    cartProductsLocal: 1,
    cartProductsLocalHandler: () => set(state => {
        return { cartProductsLocal: state.cartProductsLocal + 1 }
    }),
    cartProductsAuthUser: [],
    updateCartProductsAuthUser: (addingItem, productCounter) => set(state => {

        const productsList = [...state.cartProductsAuthUser];

        const existingProducts = productsList.findIndex(item => {
            return item.name === addingItem.name;
        })

        let existingProduct = state.cartProductsAuthUser[existingProducts];

        let updatedProduct;
        let updatedProducts = [...state.cartProductsAuthUser];
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
            updatedProduct = {
                ...addingItem
            }
            updatedProducts = productsList.concat(updatedProduct);
        }
        return { cartProductsAuthUser: updatedProducts };

    }),
    setCartProductsAuthUser: (item) => set(state => {
        return { cartProductsAuthUser: item };
    }),
}))