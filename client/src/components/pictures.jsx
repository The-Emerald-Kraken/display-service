import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
   background-image: url(${(props) => props.inputSrc});
   background-size: cover;
   background-repeat: no-repeat;
   height: 750px;
   width: 450px;
   `;
const Pictures = ({ image }) => (

  <Img inputSrc={image} />
);

Pictures.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Pictures;
