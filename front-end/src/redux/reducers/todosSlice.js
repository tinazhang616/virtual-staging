import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  service: [],
  discount: 1,
  VSDiscount: 1,
  account: {},
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    /*
    delete a service from state, 
    verify VSdiscount ===1 if the virtual staging or virtual staging plus has been deleted
     */
    todoDel(state, action) {
      const arrFilter = state.service.filter((x) => {
        return x.service !== action.payload;
      });
      return (state = { ...state, service: arrFilter });
    },
    /*
    add service
    1. add quantity to existing service
    2. push into array if not existing
    3. evaluate quantity and change the unit price according quantity(change VS discount)
    */
    todoAdded(state, action) {
      let services = state.service;
      let newAdd = action.payload.service;
      let index = services.findIndex((e) => e.service === newAdd);
      console.log("this is add index in slide", index);
      if (index >= 0) {
        state.service[index].quantity =
          +state.service[index].quantity + +action.payload.quantity;
        if (
          newAdd === "Virtual Staging" ||
          newAdd === "Virtual Staging - Plus"
        ) {
          if (state.service[index].quantity > 50) state.VSDiscount = 0.75;
          else if (state.service[index].quantity > 25) state.VSDiscount = 0.8;
          else if (state.service[index].quantity > 10) state.VSDiscount = 0.9;
        }
      } else {
        state.service.push(action.payload);
      }
      console.log("this is state add", state);
    },

    todoUpdate(state, action) {
      state = action.payload;
      return state;
    },
    /*if there is a discount code apply successful */
    todoDiscount(state, action) {
      state.discount = action.payload;
    },
    /**update login information into state */
    todoLogin(state, action) {
      return (state = { ...state, account: action.payload });
    },
    todoLogout(state, action) {
      console.log("hi");
    },
  },
});

export const { todoDel, todoAdded, todoDiscount, todoUpdate, todoLogin } =
  todosSlice.actions;
export default todosSlice.reducer;
