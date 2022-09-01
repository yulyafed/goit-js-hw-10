import './css/styles.css';

const inputCountry = document.querySelector('[id="search-box"]');
inputCountry.addEventListener('click', onInputCountryClick);

const DEBOUNCE_DELAY = 300;

function onInputCountryClick(e) { 
    
    // const inputCountryValue = e.target.value;
    // console.log(inputCountryValue)
    // const url = `https://restcountries.com/v2/all?fields=name,capital,population,flag,languages`;
    const url = 'https://restcountries.com/v2/name';
       fetch(url)
        .then(response => { return response.json(); })
        .then(country => { console.log(country) });

}