function CountOcurence(array,key){
  var count=0;
      for(var i=0;i<array.length;i++){
            if(array[i]==key){
              count++;
            }
      }
      console.log(count);
}

const array=[1,2,5,3,4,5,5,3,3,3];
CountOcurence(array,3);