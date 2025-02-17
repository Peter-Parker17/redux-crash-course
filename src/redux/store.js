import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // ✅ Importing only the reducer
import { postsApi } from "./postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ Using only the reducer
    [postsApi.reducerPath]: postsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
