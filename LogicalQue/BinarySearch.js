const arr = [1, 4, 5, 7, 8, 9, 10, 14];
let size=arr.length

function BinarySearch(arr, key, size) {
  let start = 0;
  let end = size-1;
  let mid

  mid = Math.floor(start + (end - start) / 2);
  while (start <= end) {
    if (arr[mid] == key) {
      return mid;
    }
    if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
   
  mid = Math.floor(start + (end - start) / 2);
  }
  return -1;
}

let result = BinarySearch(arr, 18, size);
console.log(`our key is found at index ${result}`);

 
 