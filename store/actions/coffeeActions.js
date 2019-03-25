import * as actiontypes from "./types";

import axios from "axios";

export const setCoffeeShopsLoading = () => ({
  type: actiontypes.COFFEESHOPS_LOADING
});

export const getCoffeeShops = () => {
  return async dispatch => {
    dispatch(setCoffeeShopsLoading());
    try {
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const CoffeeShops = res.data;
      dispatch({
        type: actiontypes.GET_COFFEESHOPS,
        payload: CoffeeShops
      });
    } catch (error) {
      console.error(error);
    }
  };
};
