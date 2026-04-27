import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

// config
const persistConfig = {
  key: "auth",
  storage,
};

// wrap reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// store
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  // Added middleware to prevent Redux-Persist serializable check errors in console
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// persistor
export const persistor = persistStore(store);

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;