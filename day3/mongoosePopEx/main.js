const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/solarSystemDB', { useNewUrlParser: true })
const Schema = mongoose.Schema	


const systemSchema = new Schema ({
    planets : [{type: Schema.Types.ObjectId, ref: `Planet`}],
    starName: String
})

const planetSchema = new Schema ({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: `System`},
    visitors: [{type: Schema.Types.ObjectId, ref: `Visitor`}]
    
})

const visitorSchema = new Schema ({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: `Planet`},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: `Planet`}]
})

const System = mongoose.model("System", systemSchema)
const Planet = mongoose.model("Planet", planetSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)

let s1 = new System ({
    planets: [],
    starName: "Galaxia"
})

let p1 = new Planet ({
    name: "Planeto",
    system: s1,
    visitors: []

})

let v1 = new Visitor ({
    name: "AlienOne",
    homePlanet: p1,
    visitedPlanets: []

})
// p1.visitors.push(v1)
// s1.planets.push(p1)
// v1.visitedPlanets.push(p1)

// s1.save()
// p1.save()
// v1.save()


// EXERCISE 1 - Find a visitor's list of visited planets


// Visitor.findOne({})
// .populate("visitedPlanets")
// .exec(function(err, visitor){
//     console.log (visitor.visitedPlanets)})

// // EXERCISE 2 - Find all the visitors on a planet

// Planet.findOne({})
// .populate("visitors")
// .exec(function(err, planet){
//     console.log(planet.visitors)
// })

// EXERCISE 3

// System.findOne({})
// .populate({
//     path: "planets",
//     populate: {
//         path: "visitors"
//     }
//     })
//     .exec(function(err, system){ 
//         system.planets.forEach(p=>console.log(p.visitors))
//     })

// EXERCISE 4

// Visitor.findOne({})
// .populate({
//     path: "homePlanet",
//     populate: {
//         path: "system"
//     }
// })
// .exec(function (err, visitor){
//     console.log(visitor.homePlanet.system.starName)
// })

// EXERCISE 5

Planet.findOne({})
.populate( `system visitors`)
.exec(function (err, planet){
    console.log (planet.system.starName) 
    console.log  (planet.visitors)
})



