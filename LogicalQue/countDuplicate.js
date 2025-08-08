let str = "codemindtechnology";
let count = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (count[char]) {
    count[char] = count[char] + 1;
  } else {
    count[char] = 1;
  }
}

for (let key in count) {
  console.log(key + " : " + count[key]);
}
