import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';


const render = (Component) => {
  const container = {
    backgroundColor: 'red'
  }
  ReactDOM.render(
    <AppContainer>
      <Component/>
      </AppContainer>,
    document.getElementById('app-react-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
