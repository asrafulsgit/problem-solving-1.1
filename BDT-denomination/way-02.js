const notes = [
     {bdt : 1000},
     {bdt : 500},
     {bdt : 100},
     {bdt : 50},
     {bdt : 10},
     {bdt : 55},
     {bdt : 2},
     {bdt : 1}
]

let totalBdt = 9629;

function bdtDenomination(limit){
     const calculation = Math.floor(totalBdt/limit)
     totalBdt = totalBdt % limit
     return calculation;
}

for (let {bdt} of notes) {
    if(totalBdt >= bdt ){
      const quantity =  bdtDenomination(bdt)
      console.log(`Amount ${bdt} => notes ${quantity}`)
    }
}