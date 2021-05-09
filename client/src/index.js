import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import ServiceStore from './store/ServiceStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    service: new ServiceStore(),
    user: new UserStore(),
  }}>
    <App />,
  </Context.Provider>,
  document.getElementById('root'),
);
