function fetchCountries(name){ 
    const url = 'https://restcountries.com/v2/all?fields=name,capital,population,flag,languages';

    fetch(url)
        .then(response => { return response.json(); })
        .then(country => { console.log(country) });
}