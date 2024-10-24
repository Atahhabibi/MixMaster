import React from 'react'
import { useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';

const SinglePageError = () => {

    const error=useRouteError(); 

    console.log(error);

  return (
    <Wrapper>
      <h4>{error.message}</h4>
    </Wrapper>
  );
}

export default SinglePageError
