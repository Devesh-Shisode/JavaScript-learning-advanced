function LargestNo(arr){
    let largestNo=arr[0];

    for(let i=0;i<arr.length;i++){
      if(arr[i]>largestNo){
        largestNo=arr[i];
      }
    }
    return largestNo;
}
let arr=[10,100,23,98,99.9999,23,56]
let result =LargestNo(arr)
console.log(`largest no of array is ${result}`);
