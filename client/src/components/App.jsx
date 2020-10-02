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
import Modal from './modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      product_name: 'Ergonomic Concrete Shoes',
      rating: 2,
      ratingsAmt: 345,
      price: '88.88',
      color: 'maroon',
      description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      image: 'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg',
      carousel: 'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/92.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/70.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/14.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/84.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/56.jpg, ',
      clothing_sizes: '30x32 30x36 30x36 40x40 ',
      count: 1,
      show: false,
    };
    this.getData = this.getData.bind(this);
    this.setImage = this.setImage.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
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

  showModal() {
    this.setState({
      show: true,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    const product = this.state;
    if (product.show) {
      return (
        <div>
          <Header />
          <Modal show={product.show} image={product.image} hideModal={this.hideModal} />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <Flex>
          <Wrapper>
            <Name name={product.product_name} />
            <Star ratings={product.rating} id={product.id} ratingsAmt={product.ratingsAmt} />
            <Price price={product.price} />
            <Color color={product.color} price={product.price} />
            <Size size={product.clothing_sizes} />
            <Quantity
              incrementCount={this.incrementCount}
              decrementCount={this.decrementCount}
              count={product.count}
            />
            <Buttons price={product.price} count={product.count} />
          </Wrapper>
          <Carousel carousel={product.carousel} setImage={this.setImage} />
          <Image>
            <Pictures image={product.image} showModal={this.showModal} />
          </Image>
          <Description description={product.description} />
        </Flex>
      </div>
    );
  }
}
const Flex = styled.div`
height: auto;
width: 1920px;
margin: 0 auto;
`;

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
