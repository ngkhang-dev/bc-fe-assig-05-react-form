import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "./slice";

const store = configureStore({
  reducer: {
    studentReducer,
  },
});

export default store;
