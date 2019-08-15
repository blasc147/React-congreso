import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Info 2019</h1>;
// const element = React.createElement(
//   'a',
//   { href: 'https://google.com' },
//   'Ir a Google'
// );
// const name = 'Info';
// const sum = () => 3 + 3;
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola soy, {undefined}</h1>;

const jsx = (
  <div>
    <h1>Informatorio 2019</h1>
    <p>Curso de React.js</p>
  </div>
);

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Informatorio 2019'),
  React.createElement('p', {}, 'Curso React.js')
);
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);