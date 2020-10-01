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
import Quantity from './quantity';
import Buttons from './buttons';
import Carousel from './carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      product_name: 'Tasty Fresh Car',
      rating: 4,
      ratingsAmt: 421,
      price: '186.48',
      color: 'maroon',
      description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      image: 'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg',
      carousel: 'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg',
      clothing_sizes: 'Small Medium Large X-Large',
      count: 1,
    };
    this.getData = this.getData.bind(this);
    this.setImage = this.setImage.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  componentDidMount() {
    this.getData(2);
  }

  getData(id) {
    axios.get(`/api/products/${id}`)
      .then(({ data }) => {
        this.setState(
          data,
        );
      });
  }

  setImage(pic) {
    this.setState({
      image: pic,
    });
  }

  incrementCount() {
    this.setState((prevState) => (
      { count: prevState.count + 1 }));
  }

  decrementCount() {
    const total = this.state;
    if (total.count > 1) {
      this.setState((prevState) => (
        { count: prevState.count - 1 }));
    }
  }

  render() {
    const product = this.state;
    return (
      <div>
        <Header />
        <div>
          <Wrapper>
            <Name name={product.product_name} />
            <Star ratings={product.rating} id={product.id} ratingsAmt={product.ratingsAmt} />
            <Price price={product.price} />
            <Color color={product.color} price={product.price} />
            <Size size={product.clothing_sizes} />
            <Quantity
              getQuantity={this.getQuantity}
              incrementCount={this.incrementCount}
              decrementCount={this.decrementCount}
              count={product.count}
            />
            <Buttons price={product.price} count={product.count} />
          </Wrapper>
          <Carousel carousel={product.carousel} setImage={this.setImage} />
          <Image>
            <Pictures image={product.image} />
          </Image>
          <Description description={product.description} />
        </div>
      </div>
    );
  }
}
const Image = styled.div`
    margin: -590px 0px 0px 650px;
`;

const Wrapper = styled.div`
    float: right;
    margin: -80px 400px 0px 50px;
    height: 700px;
    width: 350px;
    `;
const Header = styled.img`
background-image: url('https://curbcarplusminus.s3-us-west-2.amazonaws.com/REItop.png');
background-size: cover;
height: 250px;
width: 1945px;
clip-path: inset(1px);
margin: auto;
`;
export default App;
