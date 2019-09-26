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

  p {
    line-height: 18px;
    font-size: 12px;
    color: white;
  }
  section:nth-child(1) {
    height: auto;
    margin-right: 10px;
    img {
      border-radius: 2px;
      object-fit: cover;
      width: 118px;
      height: 66px;
    }
  }
  section {
    padding: 0px;
  }
  section:nth-child(2) {
    padding: 0px 0 10px 10px;
    height: auto;
    display: flex;
    justify-content: space-between;
    div:nth-child(2) {
      padding: 0;
      display: flex;
      margin-left: 30px;
    }
  }
`;

const Video = ({ title, description, thumbnail, saved, id }) => {
  const { favourites, setFavourites } = useContext(PlayerContext);
  return (
    <StyledVideo>
      <Link to={`/video/${id}`}>
        <section>
          <img src={thumbnail} alt="video thumbnail" />
        </section>
      </Link>
      <section>
        <div>
          <Link to={`/video/${id}`}>
            <p>{title}</p>
          </Link>
        </div>
        <div>
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
