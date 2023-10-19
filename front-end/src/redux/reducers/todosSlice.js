// const addItem = [];
// const addItems = (state = addItem, action) => {
//   switch (action.type) {
//     case "ADDITEM":
//       return [...state, action.payload];
//       break;
//     case "DELITEM":
//       return (state = state.filter((x) => {
//         return x.id !== action.payload.id;
//       }));
//       break;
//     default:
//       return state;
//       break;
//   }
// };
// export default addItem;

import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoDel(state, action) {
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
    },
    todoAdded(state, action) {
      state.push(action.payload);
    },
    // todoToggled(state, action) {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   todo.completed = !todo.completed;
    // },
  },
});

export const { todoDel, todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
