document.querySelector('[id="search-box"]').addEventListener("click",(function(e){var n=e.target.value;console.log(n);var t="https://restcountries.com/v2/name/".concat(n,"?fields=name,capital,population,flag,languages");fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e)}))}));
//# sourceMappingURL=index.8def3511.js.map
