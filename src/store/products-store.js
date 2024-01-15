import { create } from 'zustand';

export const useProducts = create(set => ({
    sortMethod: 0,
    setSortMethod: (method) => set(state=> {
        return { sortMethod: method }
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