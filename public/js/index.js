/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login } from './login';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form');


// DELEGATION
if (mapBox) {
  const location = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  addEventListener('submit', e => {
    e.preventDefault();
    // console.log(email, password);
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}
