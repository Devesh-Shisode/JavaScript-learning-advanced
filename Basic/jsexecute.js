let books =[
      { 
        title : "subconconcious mind ", 
        author : "joseph murphy",
        price : 149,
        published : 2008
      },

      { 
        title : "half girlfriend", 
        author : "chetan bhagat",
        price : 159,
        published : 2009
      },

      { 
        title : "three mistakes of my life", 
        author : "chetan bhagat",
        price : 169,
        published : 20089
      },

      { 
        title : "mind", 
        author : "joseph murphy",
        price : 149,
        published : 2008
      },

      { 
        title : "subconconcious mind ", 
        author : "joseph murphy",
        price : 149,
        published : 2008
      },

      { 
        title : "subconconcious mind ", 
        author : "joseph murphy",
        price : 149,
        published : 2008
      }

]


let result =books.filter((bk)=>bk.title==='half girlfriend')
result =books.filter((bk)=>{ return bk.price>139})
console.log(result);
