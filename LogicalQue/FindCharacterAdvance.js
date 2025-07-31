let str = "javascript is a nice language";
let charToFind = ["a", "i"];

function fundCharacterWithIndex(str, chars) {
  chars.forEach((char) => {
    let indexes = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
        indexes.push(i);
      }
    }

    console.log(`character : ${char}`);
    console.log(`count of character ${count}`);
    console.log(
      `indexes : ${indexes.length > 0 ? indexes.join(",") : "Not Found"}`
    );
    console.log(
      `position : ${
        indexes.length > 0
          ? indexes.map((i) => `${i + 1}${getOrdinalSuffix(i + 1)}`).join(",")
          : "Not Found"
      }`
    );
    console.log("===============================================================");
    
  });
}

function getOrdinalSuffix(n) {
  let s = ["th", "st", "nd", "rd"];
  let v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}


fundCharacterWithIndex(str,charToFind)