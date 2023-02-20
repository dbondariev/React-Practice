import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { useState } from 'react';

const rootElement = document.querySelector('#root');

const seconds = new Date().getSeconds();

const renderSeconds = time => {
  const seconds = new Date(time).getSeconds();
  const background = seconds % 2 === 0 ? 'white' : 'black';
  const color = seconds % 2 === 0 ? 'black' : 'white';

const styles = {
  color: color,
 background,
};

const elem = (
  <div 
  className='seconds'
   style={styles}
   >
    {seconds}
    </div>
);

ReactDOM.render(elem, rootElement);
};


renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);

