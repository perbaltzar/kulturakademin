import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Watch from './Watch';
import Save from './Save';

const StyledVideo = styled.div`
  margin: 20px 20px 20px;
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
      /* background-color: blue; */
      position: absolute;
      z-index: 2;
      margin: 103px 0 0 128px;
      /* opacity: 0.5;      */
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

const Video = ({ title, description, thumbnail, saved, id }) => {
  return (
    <StyledVideo>
      <Link to={`/video/${id}`}>
        <section>
          <div>
            <p>10:02</p>
          </div>
          <img src={thumbnail} alt="video thumbnail" />
        </section>
        <section>
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <div>
            <Watch />
            <Save saved={saved} />
          </div>
        </section>
      </Link>
    </StyledVideo>
  );
};

export default Video;
