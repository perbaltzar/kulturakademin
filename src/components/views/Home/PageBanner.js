import React from 'react';
import styled from 'styled-components';
import GoBackButton from '../../GoBackButton';

const StyledPageBanner = styled.div`
  height: 110px;
  width: 100%;
  margin-bottom: ${props => (props.margin ? '40px' : '0px')};
  ${props =>
    !props.paragraphText &&
    ` display: flex;
  align-items: center;
  justify-content: center;
  svg {
    position: absolute;
    left: 25px;
    top: 41px;
  }
  `};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.colorDark};
  color: ${props => props.theme.colorLight};
  p {
    margin-top: 20px;
  }
`;

const PageBanner = props => {
  return (
    <StyledPageBanner {...props}>
      <img src="/assets/icons/kplay-header.svg" alt="" />
      {props.paragraphText ? <p>{props.paragraphText}</p> : <GoBackButton />}
    </StyledPageBanner>
  );
};

export default PageBanner;
