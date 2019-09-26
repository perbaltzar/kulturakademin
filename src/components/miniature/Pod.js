import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Headphones from './Headphones';
import Save from './Save';
import addToFavourites from '../../lib/addToFavourites';
import { PlayerContext } from '../Context';
import isFavourite from '../../lib/search/isFavourite';

const StyledPod = styled.div`
  margin: 20px 0px;
  display: flex;
  p {
    line-height: 18px;
    font-size: 12px;
    color: white;
  }
  section:nth-child(1) {
    padding: 0px;
    height: auto;
    margin-right: 10px;
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

const Pod = ({ title, thumbnail, saved, id }) => {
  const { favourites, setFavourites } = useContext(PlayerContext);
  return (
    <StyledPod>
      <Link
        to={`/podd/${id}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <section>
          <div>
            <Headphones />
          </div>
          <img src={thumbnail} alt="Pod thumbnail" />
        </section>
      </Link>
      <section>
        <div>
          <Link to={`/podd/${id}`} onClick={() => window.scrollTo(0, 0)}>
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
