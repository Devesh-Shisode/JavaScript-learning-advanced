function factorialwordcount(str) {
  if (typeof str !== "string" || str.trim() === "") {
    console.log("Unhappy scenario's");
    return;
  }

 
  let wordCount = str.trim().split(/\s+/).length;

  
  let fact = 1;
  for (let i = 1; i <= wordCount; i++) {
    fact *= i;
  }

  console.log(`Factorial of word count (${wordCount}) is ${fact}`);
}

factorialwordcount("revision is the mother of success");
factorialwordcount("We never fail, we always learn, mind it");
factorialwordcount(null);
factorialwordcount("");
factorialwordcount("devessh deepak shisode");
