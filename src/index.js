import './styles/main.scss';
import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(Routes);

if (module.hot) {
   module.hot.accept('./Routes', () => {
    const NextApp =  require('./Routes').default;
    render(NextApp)
  });
}