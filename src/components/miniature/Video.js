import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Watch from './Watch';
import Save from './Save';
import addToFavourites from '../../lib/addToFavourites';
import { PlayerContext } from '../Context';
import isFavourite from '../../lib/search/isFavourite';

const StyledVideo = styled.div`
  margin: 20px 0;
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
  const { favourites, setFavourites } = useContext(PlayerContext);
  return (
    <StyledVideo>
      <Link to={`/video/${id}`}>
        <section>
          <div>
            <p>10:02</p>
          </div>
          <img src={thumbnail} alt="video thumbnail" />
        </section>
      </Link>
      <section>
        <div>
          <Link to={`/video/${id}`}>
            <h4>{title}</h4>
            {/* <p>{description}</p> */}
          </Link>
        </div>
        <div>
          <Link to={`/video/${id}`}>
            <Watch />
          </Link>
          <Save
            onClick={() => {
              addToFavourites(id, favourites);
              setFavourites(JSON.parse(localStorage.getItem('favourites')));
            }}
            saved={isFavourite(id, favourites)}
            marginleft
          />
        </div>
      </section>
    </StyledVideo>
  );
};

export default Video;
