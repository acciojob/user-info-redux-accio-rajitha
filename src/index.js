
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/Store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render(<App />, document.getElementById("root"));
*/