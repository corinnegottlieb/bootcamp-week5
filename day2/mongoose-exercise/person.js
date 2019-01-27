// const mongoose = require(`mongoose`)
// mongoose.connect(`mongodb://localhost/peopleDB`, { useNewUrlParser: true })

// const Schema = mongoose.Schema

// const addressSchema = new Schema({
//     city: String,
//     street: String,
//     apartment: Number
// })
// const personSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     address: addressSchema
// })


const Person = mongoose.model(`Person`, personSchema)

let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 })

// Person.find({}, function(err,people){
//     console.log(people)
// })

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

// Person.find({ age: { $gt: 30 } }, function (err, people) {
//     people.forEach(p => {
//         p.firstName = "Treboohs"
//         p.save()
//         console.log(people)
//     })
// })

// // Person.find({}), function(err, people){
// //     people.remove(function (err){
// //     console.log(people)
// //     })
// // }

