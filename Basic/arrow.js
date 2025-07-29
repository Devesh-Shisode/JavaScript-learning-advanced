

const obj ={
      username : "devesh",
      price : 999,

      welcomMessage : function(){
        console.log(`hello ${this.username} your course price is ${this.price}`);
        console.log(this);
        
     }

}


//obj.welcomMessage()

function one(){
        let name ='dev'
        console.log(name);
        
}

one()

let two = (dev)=>{
  let nam2='dev'

  console.log(nam2,dev);
  
}

two("chiya")