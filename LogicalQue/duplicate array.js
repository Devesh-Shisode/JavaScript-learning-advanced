const array = [1, 2, 3, 4, 4, 5, 1];
const uniqueArray = [];
array.forEach(item => {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
});
console.log(uniqueArray);