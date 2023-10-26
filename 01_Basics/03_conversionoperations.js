let score = 33

let value = "33abc"

// console.table([score,value])

// console.log(typeof score)
// console.log(typeof value)

let valueInString = String(score)
let valueInNumber = Number(value)

// console.log(typeof valueInNumber)
// console.log(typeof valueInString)
// console.log(valueInNumber) // jb b hum kisi non pure value (33acb) ko number main convert krty hyn to wo convert ho jata hy but us ki value "NaN" not a number hoti hy

// "33" => 33
// "33abc" => NaN
// true => 1; false=>0

let booleanNumber = "125"

let converNumberInBoolean = Boolean(booleanNumber)

console.log(converNumberInBoolean);

// 1 => true
// 0 => false
// "" => False
// "a" => true