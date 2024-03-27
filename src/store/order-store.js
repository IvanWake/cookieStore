import { create } from "zustand";

export const useOrder = create((set) => ({
  userOrders: [],
  addOrder: (addingOrder) => set(state => {
    return { userOrders: [...state.userOrders, addingOrder] }
  })
}))