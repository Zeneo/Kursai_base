import {create} from "zustand";

const useStore = create((set, get) => ({
    user: null,
    token: "",
    market: [],
    setUser: val => set({user: val}),
    setMarket: val => set({market: val}),

    setToken: val => set({token: val}),
    setFavorites: val => set((state) => state.user.favorites = val)
}))

export default useStore