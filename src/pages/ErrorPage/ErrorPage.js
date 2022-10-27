import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <>
        <div className='text-center'>
          <h1>Ops! An Error Ocurred!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <br />
          {error && (
            <div>
            <p className='text-danger fs-3'>{error.statusText || error.message}</p>
            <p className='fs-3'>{error.status}</p>
          </div>
          )}
        </div>
      </>
    );
};

export default ErrorPage;