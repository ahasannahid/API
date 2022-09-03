const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country);




        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        // console.log(country);
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        // <p>Capital: ${country.capital.length}</p> line no 19
        countriesContainer.appendChild(countryDiv);
    }); 
}
const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code)
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
    const courency = country.currencies;
    const currencyName = Object.keys(courency)[0];
    // console.log(country.currencies[currencyName].name);
    // console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    <h3>Currency:${country.currencies[currencyName].name}  </h3>  
    `;
}
loadCountries();