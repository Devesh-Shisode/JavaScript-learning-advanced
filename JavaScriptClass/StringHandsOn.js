console.log("================= String HandsOn Assignment ===================");

function StringHandsON() {
  let str = "   hey you are Doing Good , Keep it up   ";
  console.log(`length of String : ${str.length - 1}`);
  let mystr = str.trim();
  console.log(mystr);

  console.log(
    `First index : ${mystr[0]} , last Index : ${mystr[mystr.length - 1]} `
  );

  let words = mystr.split(" ");
  var count = 0;
  for (let i = 0; i < words.length; i++) {
    count++;
  }
  console.log(`Count of Words : ${count}`);

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "Good") {
      console.log(`Index of Good : ${i}`);
    }
  }
  console.log(`Substring start from index 22 : ${mystr.substring(22)}`);

  console.log(`is strings start with : ${words[0] === "hey"}`);
  console.log(`is strings end with : ${words[words.length - 1] === "up"}`);
}

StringHandsON();

 
