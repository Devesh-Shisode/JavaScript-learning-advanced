 
 function greet(name , callback ) {
   
  console.log("Hello, " + name);
  callback(); // invoke the callback after greeting
}

greet("Dev", () => {
  console.log("Callback runs after greeting.");
  console.log("Logging some additional information...");
  console.log("Timestamp: " + new Date().toLocaleString());
  console.log("Good to see you, Dev!");
});
