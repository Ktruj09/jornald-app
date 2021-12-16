import React from 'react';
import ReactDOM from 'react-dom';

//importamos los estilos
//importante instalar SASS antes de usar.
//npm install node-sass o yarn install node-sass
import './styles/styles.scss'

import {JournalApp} from './JournalApp'

ReactDOM.render(

  <JournalApp />,
  document.getElementById('root')
);


