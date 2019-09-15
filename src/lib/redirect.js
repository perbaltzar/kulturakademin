import React, { Redirect } from 'react-router-dom';

const redirect = (page) => {
    return <Redirect to={`/${page}`}  />
}

export default redirect;