import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Size = ({ size }) => {
  const split = size.split(' ');

  return (
    <div>
      <Label>
        Size
      </Label>
      <Flex>
        {split[0]}
      </Flex>
      <Flex>
        {split[1]}
      </Flex>
      <Flexed>
        <Flex>
          {split[2]}
        </Flex>
        <Flex>
          {split[3]}
        </Flex>
      </Flexed>
    </div>
  );
};

const Label = styled.div`
font-family: Roboto Condensed;
font-size: 14px;
line-height: 20px;
margin: 25px 0px 2px 0px
`;

const Flex = styled.span`
font-family: graphik;
font-size: 18px;
border-style: solid;
border-width: 1px;
border-radius: 2.5px;
border-color: grey;
width: min-content;
margin: 0px 10px 10px 0px;
padding: 5px 40px;
:hover {
  background-color:#c5c5c5;
}
`;
const Flexed = styled.div`
margin: 20px 10px 0px 0px;

`;

Size.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Size;
