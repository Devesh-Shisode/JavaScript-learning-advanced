function one (value , callback){
	callback()	
  console.log("hello", value)
	 
}

function call (){
	console.log("callback executes")
}

one("hell0",call)