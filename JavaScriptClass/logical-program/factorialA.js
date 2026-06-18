function factorialnum(num){
  let fact = 1
    if(num===null || num===undefined){
          console.log("Unhappy scenario's ");
       }
       if(num!=null || num !=undefined){
            for(let i =1; i<=num;i++){
              fact*=i
            }
            console.log(`factorial of ${num} is ${fact}`);
            
       }
}


factorialnum(5)
factorialnum(3)
factorialnum(null)
factorialnum(8)
factorialnum(undefined)
factorialnum(9)
factorialnum(0)