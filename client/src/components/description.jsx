import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
   font-family: Stuart,Georgia,serif;
   font-size: 25px;
   font-weight: 540;
   text-align: center;
   margin: 350px auto auto auto;
   background-color: #efeee2;
   height: 100px;
   width: 1360px;
   padding: 20px 40px 20px;
   `;
const Description = ({ description }) => (
  <Wrapper>
    <p>{description}</p>
  </Wrapper>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
