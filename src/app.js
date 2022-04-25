import axios from "axios";

console.log("JS up & running")

const landInfo = document.getElementById("land-info");
const form = document.getElementById("country-input-form")
form.addEventListener("submit", getInputFromForm)

function getInputFromForm(e) {
    e.preventDefault();
    const countryInput = document.getElementById("country-input").value
    if (countryInput.length === 0) {
        console.log('Niets ingevuld')
        landInfo.innerHTML=`Niets ingevuld`
    } else {
        getCountryInfo(countryInput)
    }
}


async function getCountryInfo(country) {
    try {
        const URL = 'https://restcountries.com/v2/name/' + country + "?fields=flag,name,subregion,capital,currencies,population,languages"
        const result = await axios.get(URL);
        const countryInfo = result.data
        printIt2(countryInfo)
    } catch (err) {
        console.log('error: ', err);
        landInfo.innerHTML=`dit land bestaat niet`
    }
}

function printIt2(data) {
    landInfo.innerHTML = data.map((ditLand) => {
        return `  
     <div id="hetLand">
     <div id="name-flag">
     <img src="${ditLand.flag}" alt="vlagvanditland"><h1>${ditLand.name}</h1>
     </div>
    ${ditLand.name} is situated in ${ditLand.subregion} It has a population of ${ditLand.population} people.
    The capital is ${ditLand.capital} and you can pay with ${ditLand.currencies}
       </div>     `
    })
    formReset()
}

function formReset(){
    form.reset()
}