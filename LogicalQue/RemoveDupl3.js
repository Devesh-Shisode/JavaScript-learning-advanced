let arr=[1,2,3,4,2,3,3,5,1,2]

function RemoveDupl(arr){
  const Unique=[]
  for(let i=0;i<arr.length;i++){
    if( Unique.indexOf(arr[i])===-1)
      Unique.push(arr[i])
  }
  return Unique;
}

console.log(RemoveDupl(arr));


