import React, {
  ComponentType,
  ReactNode,
  createElement,
 } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { ApplicationState } from '../store';

const renderMergedProps = (page: ComponentType, ...props: object[]) => {
  const finalProps = Object.assign({}, ...props);
  return createElement(page, finalProps);
};

interface OwnProps {
  exact?: boolean;
  path?: string;
  page: ComponentType;
  token?: string | null;
  children?: ReactNode;
}

const PrivateRoute = (props: OwnProps) => {
  const {
    exact,
    path,
    page,
    token,
    children,
  } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={
      (renderProps) => (!token
        ? <Redirect to={{ pathname: '/' }} />
        : renderMergedProps(page, renderProps, props))
      }
    >
      {children}
    </Route>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
    token: localStorage.getItem('token'),
  });

export default connect(mapStateToProps)(PrivateRoute);
