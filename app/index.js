import React from 'react'
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <App name="World"/>
    </AppContainer>,
    document.getElementById('stride-root')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}
