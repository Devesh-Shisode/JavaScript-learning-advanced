const descriptor= Object.getOwnPropertyDescriptor(Math,'PI')

console.log(descriptor);

const dev ={
  name : 'developer',
  price : 250,
  isAvailabel : true,

  available : function (){
    console.log("developer not available");
    
  }
}

console.log(Object.getOwnPropertyDescriptor(dev,'name'));

Object.defineProperty(dev ,'name',{
  writable : false,
  enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(dev,'name'));

for (let [key,value] of Object.entries(dev)){

  if(typeof value !=='function'){
     console.log(`Key : ${key} , Value : ${value}`);
  }
        
        
}

 
