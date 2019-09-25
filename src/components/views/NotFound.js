import React from 'react';
import styled from 'styled-components';
import PageBanner from './Home/PageBanner';
import Line from '../players/Line';
import { withRouter } from 'react-router-dom';

const StyledNotFound = styled.div`
  background-color: ${props => props.theme.colorDark};
  height: 100vh;
  padding: 0 20px;
  overflow: scroll;
  color: white;

  .flex-box {
    position: relative;
    top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    text-align: center;
    margin-bottom: 64px;
  }

  button {
    height: 40px;
    width: 145px;
    border-style: none;
    border-radius: 4px;
    color: ${props => props.theme.colorLight};
    background-color: ${props => props.theme.orange};
  }
`;

const NotFound = ({ history }) => {
  return (
    <StyledNotFound>
      <PageBanner />
      <h2>Nu blev något fel...</h2>
      <Line orange />
      <div className="flex-box">
        <h5>
          Det du letar efter verkar inte finnas här. Testa att skriva in hemsidans url igen eller gå
          tillbaka.
        </h5>
        <button onClick={() => history.goBack()}>
          <p>Gå tillbaka</p>
        </button>
      </div>
    </StyledNotFound>
  );
};

export default withRouter(NotFound);
