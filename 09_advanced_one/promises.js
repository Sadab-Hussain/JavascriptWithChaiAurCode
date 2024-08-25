// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network

    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);

})

promiseOne.then(function () {
    console.log("Promise Consumed");

})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async Task 2")
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log();
        resolve({ username: "chai", Email: "Chai@Exmaple" })
    }, 1000)

})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "sadab", password: "123" })
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The Promise is Either resolved aur rejected"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        } else {
            reject('Error: jS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/Sadab-Hussain')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", Error);
//     }
// }

// getAllUser()

fetch('https://api.github.com/users/Sadab-Hussain')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=> console.log(error))