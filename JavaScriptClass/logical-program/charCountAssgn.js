
var str = "I AM Learning JavaScript, The Language of Internet"
var str1 = "My Favourite Movie Is LAggAn"

function charCountA(str){
  let countA = 0;
        for(let i =0;i<=str.length-1;i++){
              if(str[i].toLowerCase()==="a"){
                countA++
              }
        }
        return countA
}

console.log(`given String : ${str} : And Char Count Of A is ${charCountA(str)}`);
console.log(`given String : ${str1} : And Char Count Of A is ${charCountA(str1)}`);