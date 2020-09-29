import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Logo = styled.div`
    font-family: Graphik,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #347CB1;
    margin: 0px;
`;
const Productname = styled.div`
    font-family:  Stuart,Georgia,serif;
    color: #2e2e2e;
    font-size: 35px;
    font-weight: 535;
    margin: 0px;
`;

const Name = ({ name }) => (
  <div>
    <Logo>
      <div>REI Co-op</div>
    </Logo>
    <Productname>
      <span> REI Co-op  </span>
      <span>{name}</span>
    </Productname>
  </div>

);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
