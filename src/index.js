import './styles/main.scss';
import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import Signup from './components/Signup';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(Signup);

if (module.hot) {
   module.hot.accept('./components/Signup', () => {
    const NextApp =  require('./components/Signup').default;
    render(NextApp)
  });
}