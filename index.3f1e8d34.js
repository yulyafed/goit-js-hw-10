document.querySelector('[id="search-box"]').addEventListener("click",(function(e){fetch("https://restcountries.com/v2/name").then((function(e){return e.json()})).then((function(e){console.log(e)}))}));
//# sourceMappingURL=index.3f1e8d34.js.map
