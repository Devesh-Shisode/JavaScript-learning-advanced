function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let arr = [];
    let num;

    // First number logic
    if (i === 1) num = 1;
    else if (i === 2) num = 6;
    else if (i === 3) num = 10;
    else if (i === 4) num = 13;
    else if (i === 5) num = 15;
    else if (i === 6) num = 16;
    else num = 16 + (i - 6); // in case rows > 6, a fallback rule

    for (let j = 0; j < i; j++) {
      arr.push(num);
      num -= (i - j - 1);
    }

    console.log(arr.join(' '));
  }
}

printPattern(6);
