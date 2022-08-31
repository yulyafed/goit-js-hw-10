document.querySelector('[id="search-box"]').addEventListener("click",(function(t){var e=t.target.value,n="https://restcountries.com/v2/all?fields=".concat(e,",capital,population,flag,languages");fetch(n).then((function(t){return t.json()})).then((function(t){console.log(t)}))}));
//# sourceMappingURL=index.fd097190.js.map
