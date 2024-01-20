import { create } from "zustand";

export const useAuth = create(set => ({
    isUserAuth: null,
    setIsUserAuth: (isAuth) => set(state => {
        return { isUserAuth: isAuth };
    }),
    userData: {},
    setUserData: (data) => set(state => {
        return { userData: data };
    }),
    isUserLoading: null,
    setIsUserLoading: (userStatus) => set(state => {
        return { isUserLoading: userStatus };
    })
}))