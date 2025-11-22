import { configureStore } from "@reduxjs/toolkit";
import projectFormReducer from "./projectFormSlice";

export const store = configureStore({
  reducer: {
    projectForm: projectFormReducer,
  },
});
