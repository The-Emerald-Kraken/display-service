import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
background-image: url(${(props) => props.inputSrc});
background-size: contain;
background-repeat: no-repeat;
height: 1500px;
width: 3000px;
clip-path: inset(1px);
z-index: 9999;
`;

const Modal = ({ image, show, hideModal }) => {
  if (!show) {
    return null;
  }
  return (
    <Image inputSrc={image} onClick={() => hideModal()} />
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,

};

export default Modal;
