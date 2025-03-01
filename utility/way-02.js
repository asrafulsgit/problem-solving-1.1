
// way => 2

let TotalUnit = 600;

let amount = 0;

function utilityCalculator(unit,rate){
    let extraUnit = TotalUnit - unit
    amount += extraUnit * rate
    TotalUnit = unit
}

const unitLimits = [
    {limit : 400, rate : 6},
    {limit : 300, rate : 5},
    {limit : 200, rate : 4},
    {limit : 100, rate : 3}
]

for ( let {limit,rate} of unitLimits){
    if(TotalUnit > limit){
        utilityCalculator(limit,rate)
    }
}
amount += TotalUnit * 2
console.log('Bill : '+ amount)
