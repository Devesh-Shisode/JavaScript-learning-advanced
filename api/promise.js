const fetch = require('node-fetch');
const promiseOne =new Promise(function(resolve,reject){
  //do an async call
  //DB calls
  setTimeout(function(){
    
    console.log('async task complete');
    resolve()
  },1000)
})

promiseOne.then(function(){
  console.log('promise consumed');
  
})

new Promise(function(resolve,reject){
     setTimeout(function(){
     console.log('async2 task complete');
    resolve()
  },1000)
}).then(function(){
  console.log('promise consumed 2');
  
})

const promiseThree =new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username : 'devesh',email : 'devesh@gmail.com'})
  },1000)

})

promiseThree.then(function(user){
  console.log(user);
  
})


const promiseFour =new Promise(function(resolve,reject){
  setTimeout(function(){
    let error =false
    if(!error){
      resolve({username : 'devesh',email : 'devesh@gmail.com'})
    }else{
      reject('Error :  something went wrong')
      
    }
  },1000)
})

promiseFour.then((user)=>{
  console.log(user);
  return user.username
  
}).then((username)=>{
  console.log(username);
  
}).catch((error)=>{
  console.log(error);
  
}).finally(()=> console.log('promise will resolved either is rejected'))


const promiseFive =new Promise(function(resolve,reject){
       setTimeout(function(){
    let error =true
    if(!error){
      resolve({username : 'javascript',password : '123'})
    }else{
      reject('Error :  js went wrong')
      
    }
  },1000)
})


async function consumePromiseFive() {
  try {

    const response = await promiseFive
  console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
  
  
}

consumePromiseFive()

async function getAllUsers() {
  try {
    const response =await fetch('https://newsapi.org/v2/everything?q=E-waste&apiKey=1d20ee841f36402c9f2f978907e3bc04')
    const data =response.json()
    console.log(data);
    
  } catch (error) {
    console.log("E: ",error);
    
  }
  
}

 
fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
}).catch((error)=>console.log(error))