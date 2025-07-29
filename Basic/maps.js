const myNums =[1,2,3,4,5,6,7,8,9,10]

//const newnums =myNums.map((num)=>num*10);

//console.log(newnums);

 const newnums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=50)
 console.log(newnums);

 
 const newsum =myNums.reduce((acc,cuur)=>{
  	  console.log(`acc : ${acc} and curr : ${cuur}`)
  return acc+cuur }
 ,0)

 console.log(newsum);
 