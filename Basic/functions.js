 const obj ={
        name : "devesh",
        salary : 1000000,
        age : 23,
        isdevceloper : true,

        welcome : function(){
          console.log(`hello ${this.name}`);
          
        }
 }
obj.welcome()
//   const obj1 ={

//         name : "chaitanya",
//         salary : 1000000,
//         age : 23,
//         isdevceloper : true,

//             welcome : function(){
//           console.log(`hello ${obj.name}`);
          
//         }
//  }

        function welcomeBack(){
          console.log(`hello ${obj.name}`);
         }
 console.log(this);

// obj.welcome()
 welcomeBack()
obj.name="chirag"
// obj.welcome()
// obj1.welcome()
 welcomeBack()
 

 
 