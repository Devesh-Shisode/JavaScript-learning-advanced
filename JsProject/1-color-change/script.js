const buttons =document.querySelectorAll('.button');
const body= document.querySelector('body')

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
        console.log(e);
         console.log(e.target);
        const color=e.target.id;
        if(e.target.id==="grey"){
          body.style.backgroundColor=color
        }
        if(e.target.id==="white"){
          body.style.backgroundColor=color
        }
        if(e.target.id==="blue"){
          body.style.backgroundColor=color
        }
        if(e.target.id==="yellow"){
          body.style.backgroundColor=color
        }
        
        if(e.target.id==="purple"){
          body.style.backgroundColor=color
        }
        
        
  })
});