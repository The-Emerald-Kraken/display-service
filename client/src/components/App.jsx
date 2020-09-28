import React from 'react';
import axios from 'axios';

import Pictures from './pictures';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 1,
        product_name: 'Ergonomic Rubber Hat',
        rating: 5,
        price: '177.32',
        color: 'lime',
        description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
        image: 'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg',
        clothing_type: 'shirt',
      },
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(2);
  }

  getData(id) {
    axios.get(`/api/products/${id}`)
      .then(({ data }) => {
        this.setState({
          product: data,
        });
      });
  }

  render() {
    const { product } = this.state;
    return (
      <Pictures image={product.image} />
    );
  }
}

export default App;
