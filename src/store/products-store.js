import { create } from 'zustand';

export const useProducts = create(set => ({
    sortMethod: 0,
    setSortMethod: (method) => set(state=> {
        return { sortMethod: method }
    }),
    productsList: [],
    setProductsList: (productsFormFirebase) => set(state => {
        return { productsList: productsFormFirebase }
    }),
    products: [],
    setProducts: (productsServer) => set(state => {
        return { products: productsServer };
    }),
    selectedCategory: 'All',
    changeCategory: (category) => set(state => {
        return { selectedCategory: category };
    }),
}))