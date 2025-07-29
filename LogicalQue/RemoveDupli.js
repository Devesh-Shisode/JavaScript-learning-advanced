

function RemoveDuplicate(arr){
    const Unique=[]
    let isduplicate=false;

    for(let i=0;i<arr.length;i++){
      isduplicate=false;
      for(let j=0;j<Unique.length;j++){
        if(arr[i]===Unique[j]){
          isduplicate=true;
          break;
        }
      }
      if(!isduplicate){
        Unique[Unique.length]=arr[i]
      }
    }
    return Unique
}

let arr = [1, 2, 3, 2, 4, 3, 5, 1];
let result = RemoveDuplicate (arr);
console.log(result);
