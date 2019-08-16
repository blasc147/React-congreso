

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './globalStyles/custom.css';
import './globalStyles/theme.css';
import './globalStyles/theme-responsive.css';

import Curso from './components/Curso'

const container = document.getElementById("app");

//ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Curso />, container);