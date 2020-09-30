import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Size = ({ size }) => {
  const available = [];
  let counter = 0;
  const shirts = ['Small', 'Medium', 'Large', 'X-Large'];
  const pants = ['30', '32', '34', '36', '38', '40'];
  if (size === 'pants') {
    while (counter < 4) {
      const inseam = Math.floor(Math.random() * 6);
      const waist = Math.floor(Math.random() * 6);
      const sizes = (`${pants[waist]}x${pants[inseam]}`);
      available.push(sizes);
      counter += 1;
    }
    return (
      <div>
        <Label>
          Size
        </Label>
        <Flex>
          {available[0]}
        </Flex>
        <Flex>
          {available[1]}
        </Flex>
        <Flexed>
          <Flex>
            {available[2]}
          </Flex>
          <Flex>
            {available[3]}
          </Flex>
        </Flexed>
      </div>
    );
  }
  return (
    <div>
      <Label>
        Size
      </Label>
      <Flex>
        {shirts[0]}
      </Flex>
      <Flex>
        {shirts[1]}
      </Flex>
      <Flexed>
        <Flex>
          {shirts[2]}
        </Flex>
        <Flex>
          {shirts[3]}
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
