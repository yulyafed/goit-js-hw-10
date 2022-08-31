document.querySelector('[id="search-box"]').addEventListener("click",(function(e){const t=e.target.value;fetch(`https://restcountries.com/v2/all?fields=${t},capital,population,flag,languages`).then((e=>e.json())).then((e=>{console.log(e)}))}));
//# sourceMappingURL=index.81a79a96.js.map
