import {payLoad} from "./engine.js";
import {countryList} from "./all-country.js";
import {engine} from "./ctrl.js";
import {newDate, nDate} from "./var.js";
import {date} from "./date.js";

engine(newDate, `Updated: ${date.toDateString()}`)
engine(nDate, `Updated: ${date.toDateString()}`)
payLoad()
countryList()

