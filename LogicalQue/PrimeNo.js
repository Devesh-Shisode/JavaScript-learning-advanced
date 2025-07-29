prime()
 function prime(){
      let no =7;
      let count=0;

      for(let i=2;i*i<no;i++){
            if(no%i===0){
                  count++
            }
      }
      if(count>0){
            console.log(`this is not prime ${no} `);
       }else{
            console.log(`this is prime no ${no} `);
       }
 }