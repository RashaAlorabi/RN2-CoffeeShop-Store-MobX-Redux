import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { connect } from "react-redux";
// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

class CoffeeItem extends Component {
  handlePress = () => {
    alert("Pressed");
  };
  render() {
    const { coffeeShop } = this.props;
    return (
      <ImageBackground source={coffeeShop.background} style={styles.background}>
        <View style={styles.overlay} />
        <ListItem button onPress={this.handlePress} style={styles.listitem}>
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  source={coffeeShop.img}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{coffeeShop.name}</Text>
                <Text note style={styles.text}>
                  {coffeeShop.distance}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => {
  return {
    coffeeShops: state.cartReducer,
    loading: state.coffeeReducer
  };
};
export default connect(mapStateToProps)(CoffeeItem);
