console.log("========= Reverse String ===========");
var str = "My Love";
var reverse = "";
for (let index = str.length-1; index >=0; index--) {
   reverse = reverse + str.charAt(index);
}
console.log(reverse);

console.log("========= Count the Char a  ===========");
var fruit = "Banana";
var countOfA = 0;
for (let index = 0; index < fruit.length; index++) {
    var char =fruit.charAt(index);
    if (char == 'a') {
        countOfA = countOfA+1;
    } 
}
console.log(`Count of char a : ${countOfA}`);

var fruit = "bananA";
count =0;
for(let i =0 ; i< fruit.length;i++){
      if(fruit[i].toLowerCase()==="a"){
          count++
      }
}
console.log(`count of A is ${count}`);
