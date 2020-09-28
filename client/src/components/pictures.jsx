import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
   margin: 200px 1000px auto 600px;
   `;
const Img = styled.img`
   background-image: url(${(props) => props.inputSrc});
   background-size: contain;
   background-repeat: no-repeat;
   height: 775px;
   width: 483px;
   `;
const Pictures = ({ image }) => (
  <Wrapper>
    <Img inputSrc={image} />
  </Wrapper>
);

Pictures.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Pictures;
