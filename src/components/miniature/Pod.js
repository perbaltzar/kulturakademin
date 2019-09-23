import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Listen from './Listen';
import Save from './Save';
import addToFavourites from '../../lib/addToFavourites';
import { PlayerContext } from '../Context';
import isFavourite from '../../lib/search/isFavourite';

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
    padding: 0px;
    height: auto;
    margin-right: 10px;
    div {
      background-color: #000000aa;
      position: absolute;
      z-index: 2;
      margin: 5px 0 0 40px;
      padding: 5px;
      border-radius: 50%;
      width: 21px;
      height: 21px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 9px;
        width: auto;
      }
    }
    img {
      border-radius: 2px;
      width: auto;
      height: 66px;
    }
  }
  section:nth-child(2) {
    padding: 0px 0px 10px 10px;
    height: auto;
    display: flex;
    justify-content: space-between;
    div:nth-child(2) {
      margin-left: 30px;
      display: flex;
    }
  }
`;

const Pod = ({ title, description, thumbnail, saved, id }) => {
  const { favourites, setFavourites } = useContext(PlayerContext);
  return (
    <StyledPod>
      <Link to={`/podd/${id}`}>
        <section>
          <div>
            <img src="/assets/icons/headphones.svg" alt="headphones" />
          </div>
          <img src={thumbnail} alt="Pod thumbnail" />
        </section>
      </Link>
      <section>
        <div>
          <Link to={`/podd/${id}`}>
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
    </StyledPod>
  );
};

export default Pod;
