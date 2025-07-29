// const mySym =Symbol("key1")

// const obj={
//   [mySym]:"mykey1"
// }

// console.log(obj[mySym]);
// console.log(typeof mySym);
// console.log(obj);


// const obj2={
//   name : "devesh",
//   "email" :"dev@gmail.com"
// }


// console.log(obj2.name);
// console.log(obj2["email"]);

// obj2.greeting =function(){
//     console.log(`Hello ${this.name}`);
    
// }

// console.log(obj2.greeting);
// console.log(obj2.greeting());


const obj ={
  courseInstructor : "devesh",
  fullname :{
    username :{
      firstname : "rupesh",
      lastname : "patil"
    }
  }
}

console.log(obj.fullname.username.firstname);

const {courseInstructor : instruct}=obj

console.log(instruct);
