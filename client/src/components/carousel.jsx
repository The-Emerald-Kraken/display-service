import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height:500px;
width: 120px;
margin-left: 450px;
margin-top: 100px;
overflow: auto;
:: -webkit-scrollbar {
  display:none;
}
-ms-overflow-style: none;
overflow: -moz-scrollbars-none;
`;

const Image = styled.img`
height: 112px;
width: 84px;
margin 4px;
padding: 3px;
border: 1px solid silver;
border-radius: 5px;
`;
const Up = styled.button`
position: absolute;
font-size: 30px;
font-weight:500;
padding-right:25px;
background: transparent;
border: none;
height: 30px;
width: 120px;
margin-left: 450px;
z-index: 99;


`;
const Down = styled.button`
position: absolute;
font-size: 30px;
font-weight:500;
padding-right:25px;
background: transparent;
border: none;
height: 30px;
width: 120px;
margin-left: 450px;
margin-top: -30px;
z-index:99;
-moz-transform: scale(1, -1);
-webkit-transform: scale(1, -1);
-o-transform: scale(1, -1);
-ms-transform: scale(1, -1);
transform: scale(1, -1);
`;

const Carousel = ({ carousel }) => {
  const split = carousel.split(',');
  return (
    <div>
      <a href="#carousel_photo_first">
        <Up>^</Up>
      </a>
      <Wrapper className="carousel-wrapper">
        <Image id="carousel_photo_first" src={split[0]} />
        <Image className="carousel__photo" src={split[1]} />
        <Image className="carousel__photo" src={split[2]} />
        <Image className="carousel__photo" src={split[3]} />
        <Image id="carousel_photo_last" src={split[4]} />
      </Wrapper>
      <a href="#carousel_photo_last">
        <Down>^</Down>
      </a>
    </div>
  );
};

Carousel.propTypes = {
  carousel: PropTypes.string.isRequired,
};

export default Carousel;
