let numScore = 222;
let varScore = "555"
let nanScore = "234frc"

console.table([numScore, varScore, nanScore]);
console.table([typeof numScore, typeof varScore, typeof nanScore]);

let convertNumScore = Number(numScore);
let convertVarScore = Number(varScore);
let convertNaNScore = Number(nanScore);

console.table([convertNumScore, convertVarScore, convertNaNScore]);
console.table([typeof convertNumScore, typeof convertVarScore, typeof convertNaNScore]);