import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    // filters: filtersReducer,
  },
});
