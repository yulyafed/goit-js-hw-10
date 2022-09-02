import Notiflix from 'notiflix';
export { fetchCountries };
    
const countryList = document.querySelector('.country-list');
const countryBox = document.querySelector('.country-info');

    function fetchCountries(inputCountryValue) { 
   
    const url = `https://restcountries.com/v2/name/${inputCountryValue}?fields=name,capital,population,flag,languages`;
        
        fetch(url)
            .then(response => {

                if (!response.ok) {
                    Notiflix.Notify.failure('Oops, there is no country with that name');
                }

                return response.json();
            })
            .then(countries => {
                console.log(countries)
                
                if (countries.length > 10) {
                    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                };
                if (countries.length >= 2 && countries.length <= 10) {
                    function renderCountryList(countries) {
                        const markup = countries
                            .map((country) => {
                                return `<li>
                            <p>${country.name}</p>
                            <p>:${country.flag}</p>
                            </li>`;
                            })
                            .join("");
                        countryList.innerHTML = markup;
                    };

                    renderCountryList(countries);
                    
                };
                if (countries.length === 1) {
                    function renderCountryList(countries) {
                        const markup = countries
                            .map((country) => {
                                return `<li>
                                <p>${country.name}</p>
                                <p>:${country.flag}</p>
                                </li>`;
                            })
                            .join("");
                        countryList.innerHTML = markup;
                    }

                    renderCountryList(countries);

                    function renderCountryBox(countries) {
                        const markup = countries
                            .map((country) => {
                                return `<li>
                                <p>Capital: ${country.capital} </p>
                                <p>Population: ${country.population}</p>
                                <p>Languages: ${country.languages[0].name}</p>
                                </li>`;
                            })
                            .join("");
                        countryBox.innerHTML = markup;
                    }

                    renderCountryBox(countries);
                };
            });
        }
