import React from 'react';
import axios from 'axios';

import Pictures from './pictures';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
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
