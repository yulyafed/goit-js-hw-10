document.querySelector('[id="search-box"]').addEventListener("click",(function(e){const t=e.target.value;console.log(t);fetch(`https://restcountries.com/v2/name/${t}?fields=name,capital,population,flag,languages`).then((e=>e.json())).then((e=>{console.log(e)}))}));
//# sourceMappingURL=index.29ace167.js.map
