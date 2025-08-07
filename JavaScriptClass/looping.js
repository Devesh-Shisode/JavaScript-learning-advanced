console.log(`======== 1 to 10 ============`);
for (var index = 1; index < 11; index++) {
    console.log(index); 
}

console.log(`======== 2 4 6 8 10 ----- 20 ============`);
for (var index = 2; index <= 20; index=index+2) {
    console.log(index); 
}

// for (var index = 1; index <=10; index=index+1) {
//     console.log(index*2); 
// }

console.log(`====== Table of 5 =========`);
for (let i = 1; i<=10; i++) {
    console.log(5*i); 
}
// 5 * 1. == 5
// 5 * 2. == 10
// 5 * 3. == 15
// 5 * 4. == 20

// 5 * 10 == 50


// init
var i = 1;
while (i<=10) {
    console.log(i);
    // update expression
    i++
}

console.log(`==== Find first 15 odd numbers ========`);
var oddCount = 0;
var i = 1;
while (oddCount<=15) {
    if (i%2==1) {
        console.log(i);
        oddCount = oddCount+1; 
    }
    // update 
    i++;
}