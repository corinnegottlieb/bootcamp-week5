const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post(`/person`, function (req, res) {
    let data = req.body
    let person = new Person(data)
    person.save()
    res.send(person)
})

router.put(`/person/:id`, function (req, res) {
    let id = req.params.id
    Person.findByIdAndUpdate(id, { age: 80 }, { new: true }, function (err, person) {
        res.send(person)
    })

})

// router.delete(`/apocalypse`, function (req, res){
//     Person.find({}, function (err, people){
//    people.forEach(p=> { p.remove()})})
//    res.send("Deleted everyone")
   
// })

router.delete(`/apocalypse`, function (req, res){
    Person.remove({}, function(err, people){

        res.send("Deleted everyone")
    })
   
})
module.exports = router

