import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
    font-size: 20px;
    font-weight: bold;
`;
const Shipping = styled.div`
    color: #3278AE;
`;

const Price = ({ price }) => (
  <Wrap>
    <span>{`$${price}`}</span>
    <Shipping>
      <p>Orders of $50 or more ship for free.</p>
    </Shipping>
  </Wrap>
);

Price.propTypes = {
  price: PropTypes.string.isRequired,
};

export default Price;
