import {url} from "./ctrl.js";


export const countryOne = async (counrtyName) =>{
    try{
        let res = await fetch(`${url}/country/${counrtyName}`);
        const globe = await res.json()
        const result = globe[globe.length-1]
        console.log(result)
        document.querySelector('.cov19-info').innerHTML = `
        <div class="country">${result.Country}</div>
                        <div class="column-grid">
                            <div class="cards-grid">
                                <p>Total Case</p>
                                <p class="count-1">${result.Confirmed}</p>
                            </div>
                            <div class="cards-grid">
                                <p>Active Case</p>
                                <p class="count-2">${result.Active}</p>
                            </div>
                        </div>
                        <div class="column-grid">
                            <div class="cards-grid">
                                <p>Recoveries</p>
                                <p class="count-3">${result.Recovered}</p>
                            </div>
                            <div class="cards-grid">
                                <p>Total Deaths</p>
                                <p class="count-4">${result.Deaths}</p>
                            </div>
                        </div>
                        <div class="column-grid">
                            <div class="cards-grid">
                                <p>New Case</p>
                                <p class="count-5">0000</p>
                            </div>
                            <div class="cards-grid">
                                <p>New Death</p>
                                <p class="count-6">00000</p>
                            </div>
                        </div>
        `
    } catch(err){
        console.log(err)
    }
}




