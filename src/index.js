import './css/styles.css';
import debounce from "lodash.debounce";
import { fetchCountries, countryList, countryBox } from "./fetchCountries";

const DEBOUNCE_DELAY = 300;

const inputCountry = document.querySelector('[id="search-box"]');

inputCountry.addEventListener('input', debounce(onInputCountryClick, DEBOUNCE_DELAY));

function onInputCountryClick(e) {
    const inputCountryValue = e.target.value.trim();
    if (!inputCountryValue) {
        countryList.innerHTML = '';
        countryBox.innerHTML = '';
        return;
    }

    fetchCountries(inputCountryValue);
}