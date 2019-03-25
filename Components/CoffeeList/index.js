import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    let shops;
    if (loading) {
      return <Spinner />;
    }
    // if (coffeeShops) {
    shops = coffeeShops.map(coffeeShop => (
      <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
    ));
    // }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}
const mapStateToProps = state => {
  return {
    // coffeeShops: state.coffeeReducer.coffeeShops,
    // loading: state.coffeeReducer.loading
    coffeeReducer: state.coffeeReducer
  };
};
export default connect(mapStateToProps)(CoffeeList);
