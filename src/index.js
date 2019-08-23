

import React from 'react';
import ReactDOM from 'react-dom';

import './globalStyles/custom.css';
import './globalStyles/ie.css';
import './globalStyles/theme.css';
import './globalStyles/theme-responsive.css';
import './globalStyles/lib/menu.css';
import './globalStyles/skins/default.css';
//import './globalStyles/custom.css';
//import 'bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';



import App from './App'

const container = document.getElementById("app");

//ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);