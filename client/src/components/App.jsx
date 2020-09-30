import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Pictures from './pictures';
import Description from './description';
import Name from './name';
import Star from './rating';
import Price from './price';
import Color from './color';
import Size from './size';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 1,
        product_name: 'Tasty Fresh Car',
        rating: 4,
        ratingsAmt: 421,
        price: '186.48',
        color: 'maroon',
        description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
        image: 'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg',
        clothing_type: 'pants',
      },
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(1);
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
          <Star ratings={product.rating} id={product.id} ratingsAmt={product.ratingsAmt} />
          <Price price={product.price} />
          <Color color={product.color} price={product.price} />
          <Size size={product.clothing_type} />
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
    margin: 150px 0px 0px 600px;
`;

const Wrapper = styled.div`
    float: right;
    margin: 5px 400px 0px 50px;
    height: 700px;
    width: 400px;
    `;
export default App;
