let str ="I love Javascript"
const charFind = ["a","i"];

for(let val of charFind){
      let count=0;
      for(let i=0;i<str.length;i++){
          if(val===str[i]){
            count++;
            console.log(`char ${val} found at index of ${i} and the count is ${count}`);
            
          }
      }
}