import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
margin-top: 150px
`;

const Price = styled.div`
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
`;

const Colorbox = styled.div`
background-color: ${(props) => props.inputSrc};
height: 40px;
width 40px;
border-radius: 5px;
`;

const Color = ({ color, price }) => (
  <Wrap>
    <div>{`Color : ${color}`}</div>
    <Price>
      <div>{`$${price}`}</div>
    </Price>
    <Colorbox inputSrc={color} />
  </Wrap>
);

Color.propTypes = {
  color: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Color;
