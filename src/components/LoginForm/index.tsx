import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store';
import { Credentials } from '../../store/ducks/auth/types';
import * as AuthActions from '../../store/ducks/auth/actions';

interface State {
  credentials: Credentials;
}

interface StateProps {
  credentials: Credentials;
}

interface DispatchProps {
  loginRequest(data: Credentials): void;
}

type Props = StateProps & DispatchProps;

class LoginForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      credentials: {
        username: '',
        password: '',
      },
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { credentials } = this.state;
    this.setState({
      credentials: { ...credentials, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { loginRequest } = this.props;
    const { credentials } = this.state;
    loginRequest({
      username: credentials.username,
      password: credentials.password,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.handleChange} />
        <input type="password" name="password" onChange={this.handleChange} />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  credentials: state.auth.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
