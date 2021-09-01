import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import debounce  from 'lodash.debounce';

// debounce()

alert({
    text: 'Notice me, senpai!'
  });

  const refs = {
form : document.querySelector('#form'),
input: document.querySelector('#search'),
container: document.querySelector('.container')
  }

  const hendlerSubmit = (e) => {
    e.preventDefault()
    const value = refs.input.value;
    fetch(`https://restcountries.eu/rest/v2/name/${value}`).then(response => response.json()).then(data => console.log(data)).catch(err =>console.log(error));
  }

  function createList (obj) {
   const article = ` <article>
   <h1> ${obj.name}</h1>
   <img srs = '${obj.flag}' alt = '${obj.name}'/>
   <ul> 
   <li>Capital ${obj.capital} </li>
   <li>Population ${obj.population}</li>
   <li>Languages ${obj.languages}</li>
   </ul>
   </article>
   `
   refs.container.insertAdjacentHTML('beforeend', article)
  }

  function renderCollection (arr) {
arr.forEach(element => createList);
  } 


  refs.form.addEventListener('submit',hendlerSubmit)