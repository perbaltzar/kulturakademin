import React from 'react';
import styled from 'styled-components';

const StyledDescriptionArrow = styled.img`
  margin-top: 5px;
  transform: ${props => (props.toggleText ? 'rotate(0deg)' : 'rotate(-180deg)')};
  transition: 0.35s;
`;

const DescriptionArrow = ({ toggleText, onClick }) => {
  return (
    <StyledDescriptionArrow
      src="/assets/icons/rectangle.svg"
      toggleText={toggleText}
      alt="arrow"
      onClick={onClick}
    ></StyledDescriptionArrow>
  );
};

export default DescriptionArrow;
