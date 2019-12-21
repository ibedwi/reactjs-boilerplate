/**
 * This helper used to map routes. Routes can be private or not.
 */
import React from 'react';
import { Route, Redirect, Router } from 'react-router-dom';

/**
 * A route that can only be accessed if the user is authenticated.
 * If isn't, the user will be redirected to '/home' or '/login' path.
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if token exist
  let token = localStorage.getItem('token');
  let isAuth;

  if (token) {
    isAuth = true
  }

  return (
    <>
      <Route 
        {...rest} 
        render={ props => (
          isAuth ? 
          (
            <>
              {/* TODO: ADD NAVIGATOR HERE */}
              <Component {...props} />
            </>
          ) : 
          (
            <Redirect 
              to={{
                pathname: '/login',
                state: { from: props.location }
              }} 
            />
          )
        )} 
      />
    </>
  )
};

/**
 * A route that can be accessed even if the user is not authenticated.
 */
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest} 
      render={ props => (
        <>
          {/* TODO: Add navigator here if necessary */}
          <Component { ...props } />
        </>
      )} 
    />
  )
}


export { PrivateRoute, PublicRoute };