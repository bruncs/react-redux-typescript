import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import LoginForm from './components/LoginForm';

const App: React.FC = () => (
  <Provider store={store}>
    <LoginForm />
  </Provider>
);

export default App;
