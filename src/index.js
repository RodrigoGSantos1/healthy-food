import './styles/global.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  Header  from './components/Header'

ReactDOM.render(
  <main>
    <Header />
    <App />
  </main>,
  document.getElementById('root')
);
