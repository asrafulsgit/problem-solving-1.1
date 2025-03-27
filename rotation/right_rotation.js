// right rotation by 1 step
/*let arr = [1,2,3,4,5]

let copy = arr[arr.length-1]

for(let x = arr.length-2; x >= 0 ; x--){
     arr[x+1] = arr[x]
}
arr[0] = copy;

console.log(arr)*/

// right rotation by n step
// high time complexity
/*let n = 9;

let arr = [1, 2, 3, 4, 5];

n = n % arr.length
for (let index = 1; index <= n; index++) {
  let copy = arr[arr.length - 1];
  for (let x = arr.length - 2; x >= 0; x--) {
    arr[x + 1] = arr[x];
  }
  arr[0] = copy;
}
console.log(arr);*/

// low time complexity
let n=3;
let arr = [1,2,3,4,5]
let rotArr = new Array(arr.length)

for (let i = 0; i < arr.length; i++) {
     rotArr[(i+n)%arr.length]=arr[i]
}
console.log(rotArr)