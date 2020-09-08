import {payLoad} from "./engine.js";
import {countryList} from "./all-country.js";
import {engine} from "./ctrl.js";
import {newDate} from "./var.js";
import {date} from "./date.js";

engine(newDate, `Updated: ${date.toDateString()}`)
payLoad()
countryList()
