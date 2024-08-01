// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLogged = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname:   {
            firstname: "Sadab",
            lastname: "Hussain"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2}
// const obj4 = Object.assign({},obj1, obj2, ob)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in Hindi",
    price: 999,
    courseInstructor: "HiteshSir"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

// object == Json(javascript object notation)
// {
//     "name": "hitesh",
//     "coursename": "js in Hindi",
//     "price": "999"
// }

[
    {},
    {},
    {}
]