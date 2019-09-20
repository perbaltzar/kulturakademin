import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Listen from './Listen';
import Save from './Save';

const StyledPod = styled.div`
  margin: 20px 0px;
  display: flex;
  h4 {
    color: white;
    font-size: 16px;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
    color: white;
  }
  section:nth-child(1) {
    height: auto;
    margin-right: 10px;
    div {
      background-color: ${props => props.theme.orange};
      position: absolute;
      z-index: 2;
      margin: 103px 0 0 85px;
      padding: 1px;
    }
    img {
      width: auto;
      height: 122px;
    }
  }
  section:nth-child(2) {
    padding: 10px 0 10px 0;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div:nth-child(2) {
      display: flex;
    }
  }
`;

const Pod = ({ title, description, thumbnail, saved, id }) => {
  return (
    <StyledPod>
      <Link to={`/podd/${id}`}>
        <section>
          <div>
            <p>10:02</p>
          </div>
          <img src={thumbnail} alt="Pod thumbnail" />
        </section>
      </Link>
      <section>
        <div>
          <Link to={`/podd/${id}`}>
            <h4>{title}</h4>
            <p>{description}</p>
          </Link>
        </div>
        <div>
          <Link to={`podd/${id}`}>
            <Listen />
          </Link>
          <Save saved={saved} />
        </div>
      </section>
    </StyledPod>
  );
};

export default Pod;
