import * as types from "./types";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://coffee.q8fawazo.me/"
});

const setCoffeeShopsLoading = () => ({
  type: types.COFFEESHOPS_LOADING
});

export const getCoffeeShops = () => {
  return async dispatch => {
    dispatch(setCoffeeShopsLoading());
    try {
      const res = await instance.get("api/?format=json");
      const CoffeeShops = res.data;

      dispatch({
        type: types.GET_COFFEESHOPS,
        payload: CoffeeShops
      });
    } catch (error) {
      console.error(error);
    }
  };
};
