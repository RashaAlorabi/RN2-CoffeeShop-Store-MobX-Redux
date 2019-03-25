import React, { Component } from "react";
import { Spinner } from "native-base";

import CoffeeDetail from "./Components/CoffeeDetail";
import CoffeeList from "./Components/CoffeeList";
import HomePage from "./Components/HomePage";
import CoffeeCart from "./Components/CoffeeCart";
import store from "./store";
import { Provider } from "react-redux";
export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return (
      <Provider store={store}>
        <HomePage />
        {/* <CoffeeList />
        <CoffeeDetail />
        <CoffeeCart /> */}
      </Provider>
    );
  }
}
