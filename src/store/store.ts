import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import booksReducer from "./slices/booksSlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;