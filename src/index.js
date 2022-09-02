import './css/styles.css';
import debounce from "lodash.debounce";
import { fetchCountries} from "./fetchCountries";

const DEBOUNCE_DELAY = 300;

const inputCountry = document.querySelector('[id="search-box"]');

inputCountry.addEventListener('click', debounce(onInputCountryClick, DEBOUNCE_DELAY));

function onInputCountryClick(e) { 
    
    const inputCountryValue = e.target.value;
    
    if (!inputCountryValue) { 
        return;
    }
    fetchCountries(inputCountryValue);
       
    inputCountryValue.trim();
    
    
}