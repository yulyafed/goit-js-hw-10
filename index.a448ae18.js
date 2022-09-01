document.querySelector('[id="search-box"]').addEventListener("click",(function(e){fetch("https://restcountries.com/v2/name").then((e=>e.json())).then((e=>{console.log(e)}))}));
//# sourceMappingURL=index.a448ae18.js.map
