let numScore = 222;
let varScore = "555"
let nanScore = "234frc"

// console.table([numScore, varScore, nanScore]);
// console.table([typeof numScore, typeof varScore, typeof nanScore]);

let convertNumScore = Number(numScore);
let convertVarScore = Number(varScore);
let convertNaNScore = Number(nanScore);

// console.table([convertNumScore, convertVarScore, convertNaNScore]);
// console.table([typeof convertNumScore, typeof convertVarScore, typeof convertNaNScore]);

let someState = true;
let someStateFalse = false;
let someState1 = 1;
let someStateFalse0 = 0;
let someStateEmpty = ""; 
let someStateNotEmpty = "rettt"; 

console.table([someState, someStateFalse, someState1, someStateFalse0, someStateEmpty, someStateNotEmpty]);
console.table([typeof someState, typeof someStateFalse, typeof someState1, typeof someStateFalse0, typeof someStateEmpty, typeof someStateNotEmpty]);


let someStateB = Boolean(someState);
let someStateFalseB = Boolean(someStateFalse);
let someState1B = Boolean(someState1);
let someStateFalse0B = Boolean(someStateFalse0);
let someStateEmptyB = Boolean(someStateEmpty); 
let someStateNotEmptyB = Boolean(someStateNotEmpty); 

console.table([someStateB, someStateFalseB, someState1B, someStateFalse0B, someStateEmptyB, someStateNotEmptyB]);
console.table([typeof someStateB, typeof someStateFalseB, typeof someState1B, typeof someStateFalse0B, typeof someStateEmptyB, typeof someStateNotEmptyB]);

