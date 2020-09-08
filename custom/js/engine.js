import {engine, url} from "./ctrl.js"
import {totalCase, activeCase, totalDeath, totalRecovered, newComfirmed, newRecoverd, newDeaths, newActive} from "./var.js"

export const payLoad = async () =>{
    try{
        let res = await fetch(`${url}/summary`);
        const globe = await res.json()
        let covid = globe.Global;
        // console.log(covid)
        covidRes(covid)
    } catch(err){
        console.log(err)
    }
}

function covidRes(el){
    engine(totalCase, el.TotalConfirmed),
    engine(totalRecovered, el.TotalRecovered),
    engine(totalDeath, el.TotalDeaths),
    engine(newComfirmed, `+ ${el.NewConfirmed}`),
    engine(newRecoverd, `+ ${el.NewRecovered}`),
    engine(newDeaths, `+ ${el.NewDeaths}`),
    activeCase.textContent = `${(el.TotalConfirmed) - (el.TotalDeaths + el.TotalRecovered)}`,
    newActive.textContent = `+ ${(el.NewConfirmed) - (el.NewRecovered + el.NewDeaths)}`
}


