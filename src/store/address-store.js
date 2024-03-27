import { create } from "zustand";

export const useAddress = create((set) => ({
  userAddresses: [],
  addAddress: (addingAddress) => set(state => {
    return { userAddresses: [...state.userAddresses, addingAddress] }
  })
}))