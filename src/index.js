import './css/styles.css';

const inputCountry = document.querySelector('[id="search-box"]');
inputCountry.addEventListener('click', onInputCountryClick);

const DEBOUNCE_DELAY = 300;

function onInputCountryClick(e) { 
    
    const inputCountryValue = e.target.value;
    const url = `https://restcountries.com/v2/all?fields=${inputCountryValue},capital,population,flag,languages`;

    fetch(url)
        .then(response => { return response.json(); })
        .then(country => { console.log(country) });

}