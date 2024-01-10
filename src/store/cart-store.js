import { create } from 'zustand';

export const useCart = create(set => ({
    isCartVisible: false,
    changeVisibilty: (stateVisibility) => set(state => {
        return { isCartVisible: stateVisibility };
    }),
    cartProductsLocal: null,
    cartProductsLocalHandler: (products) => set(state => {
        return { cartProductsLocal: products };
    })
}))