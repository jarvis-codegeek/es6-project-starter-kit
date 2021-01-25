import * as allFunctions from './reusablefunctions'
import {anotherFileCalc} from './module1'

document.getElementById('heading').innerHTML = allFunctions.heading

window.calculations = allFunctions.calculations

window.multi = allFunctions.multiplication

window.division = allFunctions.division

let area = new allFunctions.Rectangle()

window.rectangleCalc = area.calc

console.log(anotherFileCalc);

