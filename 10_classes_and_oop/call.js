function setUsername(username){
    //call DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email;
    this.password = password;

}

const chai = new createUser("chai", "chai@gamil.com","123")
console.log(chai);
