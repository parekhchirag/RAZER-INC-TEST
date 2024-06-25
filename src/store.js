import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./features/profilesSlice";
import { profilesApi } from "./features/profilesApiSlice";

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
    [profilesApi.reducerPath]: profilesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profilesApi.middleware),
});
