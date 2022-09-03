import Notiflix from 'notiflix';
export { fetchCountries, countryList, countryBox};
    
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
                                return `<li class = "item">
                            <img src ='${country.flag}'>
                            <p class = "text">${country.name}</p>
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
                                return `<li class = "item">
                                <img src ='${country.flag}'>
                                <p class = "text-box">${country.name}</p>
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
                                <p><span>Capital</span>: ${country.capital}</p>
                                <p><span>Population</span>: ${country.population}</p>
                                <p><span>Languages</span>: ${country.languages[0].name}</p>
                                </li>`;
                            })
                            .join("");
                        countryBox.innerHTML = markup;
                    }

                    renderCountryBox(countries);
                };
            }).catch(error => { console.log(error) });
        }
