
// const arr = [1,5,3,7,9,8,4];

// let max =0;
//  let max2 =0
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]>max){
       
//       max =arr[i]
//     } else if(arr[i] >  max2 && arr[i] < max){
//       max2 = arr[i]
//     }
// }
// console.log(max);
// console.log(max2);
 
let arr=[1,2,3,4,5,6];

let max=0
let max2=0
for(let i=0;i<arr.length;i++){
  if(arr[i]>max){
    max2=max;
    max=arr[i];

  }
}
console.log(max)
console.log(max2)