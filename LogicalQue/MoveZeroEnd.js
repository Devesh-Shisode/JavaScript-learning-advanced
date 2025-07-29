let arr=[1,4,0,5,0,7,0,7];
let temp=[arr.length-1]
let end =arr.length-1
let j=0;

 console.log("Before arr\n",arr);
 

for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
          temp[j]=arr[i]
          j++
        }
        else{
          temp[end]=arr[i]
          end--
        }
      }
      console.log("After arr\n",temp);
 

 