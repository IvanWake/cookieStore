import { create } from "zustand";

const useAuth = create(set => ({
    isUserAuth: false,
}))