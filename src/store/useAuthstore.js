import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,

  login: ({ token, user }) => {
    localStorage.setItem('token', token);
    set({ token,user: user });

  },

  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  }
}));
