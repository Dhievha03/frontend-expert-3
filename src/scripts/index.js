import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/loader.css';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import swRegister from './utils/sw-register';
import App from './views/app';

import './components/hero-section';
import './components/custom-footer';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
