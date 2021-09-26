import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TaskProvider from './context/TaskProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <TaskProvider>
    <App/>
  </TaskProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
