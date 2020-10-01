import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Minus = styled.button`
background-image: url('https://curbcarplusminus.s3-us-west-2.amazonaws.com/minus-horizontal-straight-line.png');
background-size: contain;
background-repeat: no-repeat;
border: .1rem solid #c5c5c5;
border-radius: 50%;
padding: .5rem;
font-weight: bold;
margin-right: 5px;
width: min-content;
`;
const Plus = styled.button`
background-image: url('https://curbcarplusminus.s3-us-west-2.amazonaws.com/plus.png');
background-size: contain;
background-repeat: no-repeat;
    border: .1rem solid #c5c5c5;
    border-radius: 100%;
    padding: .5rem;
    font-size: 1.2rem;
    margin-left: 5px;

`;
const Amount = styled.input`
width: 2rem;
height: 2rem;
margin-top: 5px;
margin-bottom: 30px;
border: 1px solid #c5c5c5;
border-radius: 3px;
text-align: center;
font-size: 16px;
`;

const Text = styled.div`
margin-top: 30px;
font-family: Roboto Condensed;
font-size: 16px;
line-height: 20px;
`;

const Quantity = ({ incrementCount, decrementCount, count }) => (
  <div>
    <Text>
      Quantity
    </Text>
    <Minus onClick={() => decrementCount()} />
    <Amount type="text" min="1" max="9999" minlength="1" maxlength="4" placeholder="1" value={count} />
    <Plus onClick={() => incrementCount()} />
    <hr />
  </div>
);

Quantity.propTypes = {
  count: PropTypes.number.isRequired,
  decrementCount: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,

};

export default Quantity;
