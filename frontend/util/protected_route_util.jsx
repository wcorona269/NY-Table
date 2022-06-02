import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';


  const Protected = ({ component: Component, path, currentUser, exact }) => (
    <Route path={path} exact={exact} render={props => currentUser ? <Component {...props} /> : <Redirect to="/" />
  }
  />
  );

  const mapStateToProps = (state) => {
    return { currentUser: Boolean(state.session.id)}
  }

  export const ProtectedRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Protected)
  );