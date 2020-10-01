import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
   background-image: url(${(props) => props.inputSrc});
   background-size: cover;
   background-repeat: no-repeat;
   height: 675px;
   width: 450px;
   clip-path: inset(1px);
   `;
const Pictures = ({ image }) => (

  <Img inputSrc={image} />
);

Pictures.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Pictures;
