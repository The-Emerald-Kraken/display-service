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
background-size: contain;
background-repeat: no-repeat;
height: 112px;
width: 84px;
margin 4px;
padding: 3px;
border: 1px solid silver;
border-radius: 5px;
clip-path: inset(1px);
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
: hover {
  background: linear-gradient(white, transparent);
}


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
: hover {
  background: linear-gradient(white, transparent);
}
-moz-transform: scale(1, -1);
-webkit-transform: scale(1, -1);
-o-transform: scale(1, -1);
-ms-transform: scale(1, -1);
transform: scale(1, -1);
`;

const Carousel = ({ carousel, setImage }) => {
  const split = carousel.split(',');
  return (
    <div>
      <a href="#carousel_photo_first">
        <Up className="up">^</Up>
      </a>
      <Wrapper className="carousel-wrapper">
        <Image id="carousel_photo_first" onClick={() => { setImage(split[0]); }} src={split[0]} />
        <Image className="carousel__photo" onClick={() => { setImage(split[1]); }} src={split[1]} />
        <Image className="carousel__photo" onClick={() => { setImage(split[2]); }} src={split[2]} />
        <Image className="carousel__photo" onClick={() => { setImage(split[3]); }} src={split[3]} />
        <Image className="carousel__photo" onClick={() => { setImage(split[4]); }} src={split[4]} />
        <Image id="carousel_photo_last" onClick={() => { setImage(split[5]); }} src={split[5]} />
      </Wrapper>
      <a href="#carousel_photo_last">
        <Down>^</Down>
      </a>
    </div>
  );
};

Carousel.propTypes = {
  carousel: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
};

export default Carousel;
