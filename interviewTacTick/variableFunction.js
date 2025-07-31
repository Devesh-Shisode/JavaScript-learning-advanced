var employeeId ='Abc_123'
function foo(){
  employeeId();
  console.log(employeeId);
  
  return;
  function employeeId(){
    console.log(typeof employeeId);
    
  }
}
foo()