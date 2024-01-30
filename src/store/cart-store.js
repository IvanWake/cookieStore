import { create } from 'zustand';

export const useCart = create(set => ({
    isCartVisible: false,
    changeVisibilty: (stateVisibility) => set(state => {
        return { isCartVisible: stateVisibility };
    }),
    cartProductsLocal: 1,
    cartProductsLocalHandler: () => set(state => {
        return { cartProductsLocal:  state.cartProductsLocal + 1}
    }),
    cartProductsAuthUser: [],
    updateCartProductsAuthUser: (item) => set(state => {
        return  { cartProductsAuthUser: [item, ...state.cartProductsAuthUser] };
    }),
    setCartProductsAuthUser: (item) => set(state => {
        return  { cartProductsAuthUser: item };
    }),
}))