// left rotation by 1 step
/*let arr =[1,2,3,4,5]
let copy = arr[0]
for(let i = 0;i <= (arr.length-2);i++){
    arr[i]=arr[i+1]
}
arr[arr.length-1] = copy
console.log(arr)*/

// left rotation by n step
// high time complexity
/*let n = 3; // you can check any number

let arr = [1,2,3,4,5]

n = n % arr.length

for(let x = 1;x <= n; x++){
     let copy = arr[0]
     for(let i =0 ; i < arr.length-1;i++){
          arr[i]=arr[i+1]
     }
     arr[arr.length-1]=copy;
}
console.log(arr)*/

//low time complexity
let n = 3;
let arr = [1,2,3,4,5]
let rotArr = new Array(arr.length)
for (let x = 0; x < arr.length; x++) {
     rotArr[x]= arr[(x+n)%arr.length]
}
console.log(rotArr)