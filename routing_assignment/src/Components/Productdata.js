import React, { Component } from "react";
import { ReactComponent } from "*.svg";

class ProductData extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    getProducts().then(products => {
      this.setState({
        products
      });
    });
  }

  render() {
    return this.props.render({
        products: this.state.products

        
    });
  }
}

export default ProductData ;

