import './css/styles.css';

const inputCountry = document.querySelector('[id="search-box"]');
// inputCountry.addEventListener('click');
const DEBOUNCE_DELAY = 300;
const url = 'https://restcountries.com/v2/all?fields=name,capital,population,lang';

fetch(url)
    .then(response => { return response.json();})
    .then(country => { console.log(country) });
