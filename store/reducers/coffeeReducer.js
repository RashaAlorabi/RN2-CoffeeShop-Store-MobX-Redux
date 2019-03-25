import * as types from "../actions/types";
const initialState = {
  coffeeShops: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: this.state.concate(action.payload),
        loading: false
      };

    case types.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default reducer;
