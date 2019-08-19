import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store';
import { User } from '../../store/ducks/user/types';
import * as AuthActions from '../../store/ducks/auth/actions';
import * as UserActions from '../../store/ducks/user/actions';


interface StateProps {
  user: User;
}

interface DispatchProps {
  fetchUserRequest(): void;
  logoutRequest(): void;
}

type Props = StateProps & DispatchProps;

class Dashboard extends Component<Props, {}> {
  componentDidMount() {
    const { fetchUserRequest } = this.props;
    fetchUserRequest();
  }

  handleLogout = () => {
    const { logoutRequest } = this.props;
    logoutRequest();
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <h1>Dashboard</h1>
        <p>{user && user.name}</p>
        <p><img alt={user && user.name} src={user && user.avatar} /></p>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  ...UserActions,
  ...AuthActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
