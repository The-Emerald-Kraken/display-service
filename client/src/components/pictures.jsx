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
const Pictures = ({ image, showModal }) => (

  <Img inputSrc={image} onClick={() => showModal()} />
);

Pictures.propTypes = {
  image: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Pictures;
