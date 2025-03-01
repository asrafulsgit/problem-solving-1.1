
let totalBdt = 9628;


function bdtDenomination(limit){
     let note = Math.floor(totalBdt / limit) ;
     console.log(`amount ${limit} => quantity ${note}`)
     totalBdt = totalBdt % limit ;
}



if(totalBdt >= 1000){
     bdtDenomination(1000)
}

if(totalBdt >= 500){
     bdtDenomination(500)
}
if(totalBdt >= 100){
     bdtDenomination(100)
}
if(totalBdt >= 50){
     bdtDenomination(50)
}
if(totalBdt >= 10){
     bdtDenomination(10)
}
if(totalBdt >= 5){
     bdtDenomination(5)
}
if(totalBdt >= 2){
     bdtDenomination(2)
}
if(totalBdt >= 1){
     bdtDenomination(1)
}
