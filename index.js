//const checker = require("./checker.js") CommonJS
import checker from './checker.js' //ES6


const obj1 = {
  name: 'ahmadsan',
  sex: 'male',
  age: 22,
  iq: 99999999999n
  
}

checker.checkData(typeof(obj1.iq))