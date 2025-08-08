var str = "Hard Work Always Pays Back";
var str2 = "Soon I Will Angular It Champ";

function rversestring(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      continue;
    }
    reversed += str[i];
  }
  console.log(`given string is : ${str} : Revrsed String is : ${reversed}`);
}

rversestring(str)
rversestring(str2)