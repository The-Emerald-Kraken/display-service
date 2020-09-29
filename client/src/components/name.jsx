import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    float: right;
    display: block;
    postion: fixed;
    margin-right: 400px;
`;
const Logo = styled.div`
    font-family: Graphik,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #347CB1;
`;
const Productname = styled.div`
    font-family:  Stuart,Georgia,serif;
    color: #2e2e2e;
    font-size: 35px;
    font-weight: 535;
`;

const Name = ({ name }) => (
  <Wrapper>
    <Logo>
      <p>REI Co-op</p>
    </Logo>
    <Productname>
      <span> REI Co-op  </span>
      <span>{name}</span>
    </Productname>
  </Wrapper>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
