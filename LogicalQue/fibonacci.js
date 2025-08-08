function fiboNacci(no){
  console.log(0,1)
      var prev=0;
      var next=1;
  for (var i=0;i<no;i++){
        var newnext=prev+next;
        console.log(newnext);
        prev=next;
        next=newnext;
  }
}
 
let no = 10;
fiboNacci(no+"\n");