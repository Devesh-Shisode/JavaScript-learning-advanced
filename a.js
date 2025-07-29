//  function x(){
//   let a=7
//   function y(){
//     console.log(a);
//   }
//   return y
//  }

//  let z =x()
//  console.log(z);
//  z()
 

// function x(){
//   for(var i=1;i<=5;i++){
//     setTimeout(function(){
//       console.log(i);  //it prints 6 5times to tackle this we let instead of var and solution is we have to write one inner function and wrap settimeout it in  
      
//     },i*1000)
//   }
//   console.log('hello');
  
// }

// x()

function x(){
  for(var i=1;i<=5;i++){
    function close(x){
      setTimeout(()=>{
        console.log(x);
        
      },1000)
    }
    close(i)
  }
  console.log('hello');
  
}

x()
