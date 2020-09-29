import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Pictures from './pictures';
import Description from './description';
import Name from './name';
import Star from './rating';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 1,
        product_name: 'Ergonomic Rubber Hat',
        rating: 4,
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
      <div>
        <Wrapper>
          <Name name={product.product_name} />
          <Star rating={product.rating} id={product.id} />
        </Wrapper>
        <Image>
          <Pictures image={product.image} />
        </Image>
        <Description description={product.description} />
      </div>
    );
  }
}
const Image = styled.div`
    margin: 200px 0px 0px 600px;
`;

const Wrapper = styled.div`
    float: right;
    margin: 0px 100px 0px 150px;
    height: 1500px;
    width: 600px;
    `;
export default App;
