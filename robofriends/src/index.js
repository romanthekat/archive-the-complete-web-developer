import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import "tachyons";
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello greeting={'Hello' + 'react'}/>, document.getElementById('root'));
registerServiceWorker();
