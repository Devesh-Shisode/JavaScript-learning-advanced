nsole.log("========= Count the vowels  ===========");
var greet = "Good Morning Andy";
var vowels = "aeiou";
var vowelsCount = 0;
for (let index = 0; index < greet.length; index++) {
    var char = greet.charAt(index).toLowerCase();
    if (vowels.includes(char)) {
        vowelsCount = vowelsCount + 1;
    }
}
console.log(`Vowels count: ${vowelsCount}`);