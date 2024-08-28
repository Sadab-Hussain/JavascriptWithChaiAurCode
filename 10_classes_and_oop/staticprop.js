class User {
    constructor(username){
        this.username;
    }
    logMe(){
        console.log(`UserName:${this.username}`);
        
    }
     createId(){
        return '123'
    }
}

const sadab = new User("sadab")
// console.log(sadab.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone","Iphone@gmail.com")
console.log(iphone.createId())