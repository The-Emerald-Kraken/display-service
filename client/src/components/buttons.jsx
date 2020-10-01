import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Curb = styled.div`
font-family: Graphik,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: 400;
letter-spacing: -.016rem;
line-height: 1.5;
color: #292929;
font-size: 16px;
box-sizing: inherit;
margin: 25px 0px 15px 0px;
border: 1px solid #225c4e;
border-radius: 2px;
padding: .8rem;
display: flex;
align-items: flex-start;
`;
const Curbtext = styled.p`
font-style: normal;
letter-spacing: -.016rem;
line-height: 1.5;
box-sizing: inherit;
margin: 0 0 0 12px;
font-family: Graphik,sans-serif;
font-size: 12px;
font-weight: 600;
color: #225c4e;
`;
const Curbimg = styled.img`
background-image: url('https://curbcarplusminus.s3-us-west-2.amazonaws.com/car.png');
background-size: cover;
background-repeat: no-repeat;
background-color: transparent;
border-image: none;
height: 20px;
width: 20px;
clip-path: inset(1px);
`;
const Learn = styled.span`
font-style: normal;
letter-spacing: -.016rem;
line-height: 1.5;
font-family: Graphik,sans-serif;
font-size: 10px;
background-color: transparent;
outline: 0;
color: #3278ae;
font-weight: 500;
margin: auto;
:hover {
text-decoration: underline;
}
`;
const Radio = styled.input`
height:18px;
width:18px;
`;
const Label = styled.label`
letter-spacing: -.016rem;
font: Stuart,Georgia,serif;
line-height: 1.333;
font-family: Stuart,Georgia,serif!important;
cursor: pointer;
padding-left: 0;
font-size: 18px;
font-weight: 600;
margin-left: 5px;
position: relative;
`;
const Cart = styled.button`
text-transform: none;
overflow: visible;
font: inherit;
width: 100%;
font-size: 16px;
font-style: normal;
line-height: 16px;
padding: 16px 32px;
border: 1px solid transparent;
cursor: pointer;
vertical-align: middle;
white-space: nowrap;
border-width: 1px;
border-style: solid;
border-radius: 2px;
outline: 0;
display: block;
text-decoration: none;
color: #fff;
margin: 10px 0px 10px 0px;
background-color: #426c90;
border-color: #426c90;
text-align: center;
    :hover {
    background-color: #2b455c;
    border-color: #2b455c;
    }

`;
const Find = styled.span`
font-style: normal;
letter-spacing: -.016rem;
line-height: 1.5;
font-family: Graphik,sans-serif;
font-size: 16px;
background-color: transparent;
outline: 0;
color: #3278ae;
font-weight: 500;
margin-left: 30px;
:hover {
text-decoration: underline;
}
`;
const AddL = styled.button`
overflow: visible;
width: 165px;
border: 1px solid transparent;
cursor: pointer;
display: inline-block;
text-align: center;
white-space: nowrap;
font-family: Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;
font-style: normal;
border-width: 1px;
border-style: solid;
border-radius: 2px;
outline: 0;
color: #2e2e2e;
background-color: #fff;
border-color: #c5c5c5;
font-size: 16px;
line-height: 16px;
padding: 12px 16px;
flex-grow: 1;
vertical-align: top;
float: left;
: hover{
background-color: #c5c5c5;
}
`;
const AddR = styled.button`
overflow: visible;
width: 165px;
border: 1px solid transparent;
cursor: pointer;
display: inline-block;
text-align: center;
white-space: nowrap;
font-family: Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;
font-style: normal;
border-width: 1px;
border-style: solid;
border-radius: 2px;
outline: 0;
color: #2e2e2e;
background-color: #fff;
border-color: #c5c5c5;
font-size: 16px;
line-height: 16px;
padding: 12px 16px;
flex-grow: 1;
vertical-align: top;
float: right;
: hover{
background-color: #c5c5c5;
}
`;
const Return = styled.div`
font-family: Graphik,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: 400;
letter-spacing: -.016rem;
line-height: 1.5;
font-size: 16px;
text-align: center;
box-sizing: inherit;
outline: 0;
background-color: transparent;
text-decoration: none;
-webkit-font-smoothing: antialiased;
cursor: pointer;
display: inline-block;
width: auto;
padding: 2rem 1rem;
color: #3278ae;
margin-left:100px;
`;
const Buttons = ({ price, count }) => {
  const totalPrice = count * Number(price);
  const addPrice = `Add to cart $${totalPrice.toFixed(2)}`;

  return (
    <div>
      <Curb>
        <Curbimg />
        <Curbtext>Curbside Pickup available at select locations.</Curbtext>
        <Learn>Learn more</Learn>
      </Curb>

      <div>
        <Radio type="radio" name="ship" />
        <Label>Ship to address</Label>
      </div>
      <div>
        <Radio type="radio" name="ship" />
        <Label>Pick up at store</Label>
      </div>
      <Find>Find a store near you</Find>
      <Cart>{addPrice}</Cart>
      <div>
        <AddL>Add to wish list</AddL>
        <AddR>Add to registry</AddR>
      </div>
      <div>
        <Return>REI return policy</Return>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  price: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,

};

export default Buttons;
