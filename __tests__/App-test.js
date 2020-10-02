/* eslint-disable no-undef */
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
import React from 'react';
import regeneratorRuntime from "regenerator-runtime";
import request from 'supertest';
import axios from 'axios'
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import App from '../client/src/components/App';
import {setImage} from '../client/src/components/App';
import Description from '../client/src/components/description';
import Name from '../client/src/components/name';
import Rating from '../client/src/components/rating';
import Pictures from '../client/src/components/pictures';
import Price from '../client/src/components/price';
import Color from '../client/src/components/color';
import Size from '../client/src/components/size';
import Quantity from '../client/src/components/quantity';
import Buttons from '../client/src/components/buttons';
import Carousel from '../client/src/components/carousel';
import Modal from '../client/src/components/modal';





const mockFn = jest.fn();




describe('A suite', function() {
  it('have a product object', function() {
    expect(shallow(<App />).find('id')).toEqual({});
  });
  it('should render a description without throwing an error', function() {
    const descriptions =renderer
    .create(<Description description={'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'} />);
    expect(descriptions).toMatchSnapshot();
  });
  it('should render a name without throwing an error', function() {
    const names =renderer
    .create(<Name name={'Ergonomic Rubber Hat'}/>);
    expect(names).toMatchSnapshot();
  });
  it('should render an image without throwing an error', function() {
    const images =renderer
    .create(<Pictures image={'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg'} showModel={mockFn(true)}/>);
    expect(images).toMatchSnapshot();
  });
  it('should render a rating and number of ratings without throwing an error', function() {
    const rating =renderer
    .create(<Rating ratings={4} id={1} ratingsAmt={292}/>);
    expect(rating).toMatchSnapshot();
  });
  it('should render a rating and number of ratings without throwing an error', function() {
    const rating =renderer
    .create(<Rating ratings={1} id={1} ratingsAmt={292}/>);
    expect(rating).toMatchSnapshot();
  });
  it('should render a price without throwing an error', function() {
    const pricing =renderer
    .create(<Price price={'186.48'}/>);
    expect(pricing).toMatchSnapshot();
  });
  it('should render color and price without throwing an error', function() {
    const colors =renderer
    .create(<Color price={'186.48'} color={'maroon'}/>);
    expect(colors).toMatchSnapshot();
  });
  it('should render size options without throwing an error', function() {
    const sizes =renderer
    .create(<Size size={'shirts'} />);
    expect(sizes).toMatchSnapshot();
  });
  it('should render a quantity box without throwing an error', function() {
    const quantity =renderer
    .create(<Quantity  incrementCount={jest.fn()}
      decrementCount={jest.fn()}
      count={1}/>);
    expect(quantity).toMatchSnapshot();
  });
  it('should render a quantity box without throwing an error', function() {
    const buttons =renderer
    .create(<Buttons price ={'186.48'} count={1}/>);
    expect(buttons).toMatchSnapshot();
  });
  it('should render a picture carousel without throwing an error', function() {
    const pictures =renderer
    .create(<Carousel carousel={'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg, https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg'} setImage={jest.fn('https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg')}/>);
    expect(pictures).toMatchSnapshot();
  });
  it('should call mock function when button is clicked', () => {
    console.log(App);
    const tree = shallow(
      <Carousel carousel={'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg'} setImage={mockFn('https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg')}/>
    );
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
  it('should render size options without throwing an error', function() {
    const hide =renderer
    .create(<Modal image={'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg'} hideModal={true} />);
    expect(hide).toMatchSnapshot();
  });
  it('should render size options without throwing an error', function() {
    const hide =renderer
    .create(<Modal image={'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg'} hideModal={false} />);
    expect(hide).toMatchSnapshot();
  });
});



