import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBack = ({ history }) => (
  <svg
    onClick={() => history.goBack()}
    alt="Go back"
    width="16"
    height="25"
    viewBox="0 0 16 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 0L15.625 3.125L6.25 12.5L15.625 21.875L12.5 25L0 12.5L12.5 0Z"
      fill="white"
    />
  </svg>
);

export default withRouter(GoBack);
