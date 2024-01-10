import { create } from 'zustand';

export const useProducts = create(set => ({
    selectedCategory: 'All',
    changeCategory: (category) => set(state => {
        return { selectedCategory: category};
})
}))