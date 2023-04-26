let container = document.querySelector(".cards");

fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    data.forEach(country =>{
        container.innerHTML +=`
        <div class="card col-3">
            <img src="${country.flags.png}" alt="#">
            <h2>${country.name.common}</h2>
            <span>Population: ${country.population}</span>
            <span>Region: ${country.region}</span>
            <span>Capital: ${country.capital}</span>
        </div>
        ` 
    })
})
