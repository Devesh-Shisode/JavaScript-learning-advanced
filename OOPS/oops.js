const user ={
    user : 'devesh',
    signedIn : 'true',
    loginCount : '7',
    welomeMessage : function (){
      console.log('hell from user');
      
    }
}

function User(username,loginCount,IsLoggedInd){
      this.username=username
      this.loginCount=loginCount
      this.IsLoggedInd=IsLoggedInd

      return this
}

const userOne = User('devesh',8,true)

console.log(userOne);
