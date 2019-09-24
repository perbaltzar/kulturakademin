import React from 'react';
import styled from 'styled-components';

const ShareIconStyled = styled.svg`
  margin-right: ${props => (props.marginRight ? '20px' : '')};
`;
const ShareIcon = props => {
  return (
    <ShareIconStyled
      {...props}
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7143 4.09091C7.28571 4.09091 0 8.18182 0 15C4.8 9.18182 8.57143 9.09091 10.7143 9.09091V14.0909L18 6.81818L10.7143 0V4.09091Z"
        fill="white"
      />
    </ShareIconStyled>
  );
};

export default ShareIcon;
