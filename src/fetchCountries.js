import Notiflix from 'notiflix';
export { fetchCountries, countryList, countryBox };

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


            function renderCountryBox(countries) {
                const markup = countries
                    .map((country) => {
                        return `<li>
                                <p><span>Capital</span>: ${country.capital}</p>
                                <p><span>Population</span>: ${country.population}</p>
                                <p><span>Languages</span>: ${country.languages.map((language) => language.name).join(", ")}</p>
                                </li>`;
                    })
                    .join("");
                countryBox.innerHTML = markup;
            }

            if (countries.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            } else if (countries.length >= 2 && countries.length <= 10) {
                renderCountryList(countries);
                countryBox.innerHTML = "";

            } else {
                renderCountryList(countries);
                renderCountryBox(countries);
            };
        }).catch(error => { console.log(error) });
}
