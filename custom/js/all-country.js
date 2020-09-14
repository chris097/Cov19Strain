import {url} from "./ctrl.js";
import {countryOne} from "./ext.js"


export const countryList = async () =>{
    try{
        let res = await fetch(`${url}/summary`);
        const globe = await res.json()
        console.log(globe.Countries)
        getCountries(globe.Countries)
        // event(globe.Countries)
    } catch(err){
        console.log(err)
    }
}

let coverage = document.querySelector('.coverage')
    coverage.addEventListener('click', el => {
        let res = el.target.parentNode.innerText;
        console.log(res)
        countryOne(res)
    })

function getCountries(country){
    let sorted = country.sort((a,b) => {
        return b.TotalConfirmed - a.TotalConfirmed
    })

    const mapped = sorted.map(el => {
        return `
            <div class="column" id="column" value="sg">
                <li class="column">
                    <div class="country-flag"><img src="./custom/img/🇺🇸a-flag.svg" alt=""></div>
                    <div class="country-name">${el.Country}</div>
                </li>
                <li class="cov19-figure">${el.TotalConfirmed}</li>
            </div>
        `
    }).join(' ')
    
    coverage.innerHTML = mapped;
}
