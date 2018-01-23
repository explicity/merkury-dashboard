import './styles/main.scss';
import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/Login';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(Login);

if (module.hot) {
   module.hot.accept('./components/Login', () => {
    const NextApp =  require('./components/Login').default;
    render(NextApp)
  });
}