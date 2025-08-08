
function findGcd(no1,no2){
    var gcd=1
  for(let i=1;i<no1&&i<no2;i++){
    if(no1%i==0&&no2%i==0){
          gcd=i;
    }
  }
    console.log("gcd of {no1},{no1} is {gcd} ",no1,no2,gcd);
}

findGcd(14,7);