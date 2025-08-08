function autoMorphicNo(no){
    var temp=no;
  var sq=no*no;
  while(no>0){
    if(no%10==sq%10){
      return temp+" No is automorphic";
    }
    no=no/10;
    sq=sq/10;
  }
    return temp+" no is not automorphic";
}

console.log(autoMorphicNo(78));