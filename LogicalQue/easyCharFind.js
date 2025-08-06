let str = "Javascript is Intelligent";
charsToFind = ["a", "i"];

function charFind(str, chars) {
  chars.forEach((char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
      if (char.includes(str[i].toLowerCase())) {
        console.log(`Character : ${char}`);
        console.log(`Character Count : ${count}`);
        console.log(`Character ${str[i]} --------> index at ${i}`);
      }
    }
  });
}

charFind(str, charsToFind);
