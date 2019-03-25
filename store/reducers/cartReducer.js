import * as types from "../actions/types";
const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
