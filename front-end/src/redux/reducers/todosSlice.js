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
      console.log("this is delete action", action);
      return (state = state.filter((x) => {
        return x.service !== action.payload;
      }));
    },
    todoAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { todoDel, todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
