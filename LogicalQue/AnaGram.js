function ChechAnagram(str1,str2){
     const sortedstr1 =str1.split("").sort().join("");
     const sortedstr2 =str2.split("").sort().join("");

      return sortedstr1===sortedstr2
}

console.log(ChechAnagram("race","acer"));
