import React from "react";
import styled from "styled-components";

const StyledIcon = styled.img`
  height: 24px;
  width: 24px;
  color: white;
`;

const Icon = props => {
  const { imgsrc } = props;
  return <StyledIcon src={imgsrc} alt=""></StyledIcon>;
};

export default Icon;
