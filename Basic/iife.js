

(function greet(){

  //named iife
  console.log("hello by iife")
  
})();

( ()=>{
  //using arrow function
  console.log("DB CONNECTED");
  
})();


( (name)=>{

  //using parameter
  console.log(`hello ${name}`);
  
})("devesh")