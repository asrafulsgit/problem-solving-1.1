// way => 01

let TotalUnit = 600;

let amount = 0;

function utilityCalculator(unit,rate){
    let extraUnit = TotalUnit - unit
    amount += extraUnit * rate
    TotalUnit = unit
}

if(TotalUnit > 400){
    utilityCalculator(400,6)
}
if(TotalUnit > 300 && TotalUnit <= 400){
     utilityCalculator(300,5)
}
if(TotalUnit > 200 && TotalUnit <=300 ){
     utilityCalculator(200,4)
}
if(TotalUnit > 100 && TotalUnit <=200 ){
     utilityCalculator(100,3)
}
amount += TotalUnit * 2

console.log('Bill : '+ amount)



