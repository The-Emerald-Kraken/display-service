import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Star({ ratings, id, ratingsAmt }) {
  const score = (ratings / 5) * 100;

  return (
    <div>
      <StarStyle inputWidth={score} />
      <span>{`${ratings} | ${ratingsAmt}`}</span>
      <Item>
        {`Item  #${id}`}
      </Item>
    </div>
  );
}

Star.propTypes = {
  ratings: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  ratingsAmt: PropTypes.number.isRequired,
};
const Item = styled.span`
    margin: 0px 0px 0px 100px;
`;

const StarStyle = styled.div`
color: #c5c5c5;
margin: 100x 300px 0px 0px
height: 25px;
width: 105px;
font-size: 24px;
position: relative;
text-shadow: 0 1px 0 #a2a2a2;
display:inline-block;margin-right:10px;
&:before {
  content: '★★★★★';
  opacity: .6;
}
&:after{
  font-size: 24px;
  content: "★★★★★";
  color: #3278AE;
  position: absolute;
  display: block;
  left: 0;
  top:0;
  width: ${(props) => props.inputWidth || '0'}%;
  overflow: hidden;
}
`;

export default Star;
