import * as actiontypes from "../actions/types";
const initialState = {
  coffeeShops: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: action.payload,
        loading: false
      };

    case actiontypes.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default reducer;
