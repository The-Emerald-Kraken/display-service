import React from 'react';
import styled from 'styled-components';

const Minus = styled.button`
border: .1rem solid #c5c5c5;
border-radius: 50%;
padding: .5rem;
font-size: 1rem;
font-weight: bold;
margin-right: 5px;
`;
const Plus = styled.button`
    border: .1rem solid #c5c5c5;
    border-radius: 50%;
    padding: .5rem;
    font-size: 1rem;
    margin-left: 5px;

`;
const Amount = styled.input`
width: 2.75rem;
height: 2.5rem;
margin-top: 5px;
margin-bottom: 30px;

border: 1px solid #c5c5c5;
border-radius: 3px;
`;

const Text = styled.div`
margin-top: 30px;
font-family: Roboto Condensed;
font-size: 16px;
line-height: 20px;
`;

const Quantity = () => (
  <div>
    <Text>
      Quantity
    </Text>
    <Minus data-ui="quantity-decrement">-</Minus>
    <Amount type="text" min="1" max="9999" minlength="1" maxlength="4" data-ui="product-buygrid-quantity-box" />
    <Plus data-ui="quantity-increment">+</Plus>
    <hr/>
  </div>
);

export default Quantity;
