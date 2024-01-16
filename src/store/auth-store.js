import { create } from "zustand";

const useAuth = create(set => ({
    isUserAuth: null,
}))