import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../Context';

const StyledAboutPageBanner = styled.div`
  height: 110px;
  width: 100%;
  margin-bottom: ${props => (props.margin ? '40px' : '0px')};
  ${props =>
    !props.paragraphText &&
    ` display: flex;
  align-items: center;
  justify-content: center;
  img:nth-child(2) {
    position: absolute;
    left: 20px;
    top: 40px;
  }
  `};
  display: flex;
  align-items: center;
  z-index: 201;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.colorDark};
  color: ${props => props.theme.colorLight};
  p {
    margin-top: 20px;
  }
`;

const AboutPageBanner = props => {
  const { setDisplayMenu, toggleMenuAnimation, setToggleMenuAnimation } = useContext(MenuContext);
  return (
    <StyledAboutPageBanner {...props}>
      <img src="/assets/icons/kplay-header.svg" alt="" />
      {props.paragraphText ? (
        <p>{props.paragraphText}</p>
      ) : (
        <img
          src="/assets/icons/go-back.svg"
          alt="back"
          onClick={() => {
            setDisplayMenu('block');
            setToggleMenuAnimation(!toggleMenuAnimation);
          }}
        />
      )}
    </StyledAboutPageBanner>
  );
};

export default AboutPageBanner;
