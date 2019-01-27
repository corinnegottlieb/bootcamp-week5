// const add = require('./code')

// test("add should return sum of a + b", () => {
//     let sum = add(1, 2)
//     expect(sum).toBe(3)
// })

// const calculateHyp = require(`./code`)

// test("calculateHyp should return the square root of a + b", () => {
//     let hypotenuse = calculateHyp(3, 4)
//     expect(hypotenuse).toBe(5)
// })

// const removeBugs = require('./code')

// test("should remove all BUGs from list of code", () => {
//     let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
//     let bugFreeCode = removeBugs(code)
    
//     expect(bugFreeCode).not.toContain("BUG")
//     expect(bugFreeCode).toContain("good code")
// })

// const clearLowPriority = require(`./code`)

// test("should remove all LOW priority objects from array", () =>{
//     let array = [{text: "whatever", priority: "LOW"}, {text: "hey", priority: "HIGH"}, {text: "bye", priority: "LOW"}]
//     let highPriority = clearLowPriority(array)

//     highPriority.forEach(h=>{expect(h.priority).toBe("HIGH")})
// })

// const PM = require('./code')

// test("addPicture should add a picture URL to the pictureURLs array", function () {
//     //sanity
//     const picManager = new PM()
//     expect(picManager.pictureURLs.length).toBe(0)

//     picManager.addPicture("some_url")
//     expect(picManager.pictureURLs.length).toBe(1)           //test
//     expect(picManager.pictureURLs).toContain("some_url")    //double check 
// })

// const PM = require('./code')

// test("removePicture should receive a picture URL and remove it from the pictureURLs array", function () {
//     //sanity
//     const picManager = new PM()
//     expect(picManager.pictureURLs.length).toBe(0)

//     picManager.addPicture("some_url")
//     picManager.addPicture("some_url2")
//     picManager.addPicture("some_url3")

//     picManager.removePicture("some_url2")
//     expect(picManager.pictureURLs.length).toBe(2)
//     expect(picManager.pictureURLs.length).not.toContain("some_url2") //here this isn't double checking, this is necessary
// })

// const AM = require(`./code`)

// test("manipulate should return a message if array lengths don't match", () => {
// let arrayManipulator = new AM()
// let x = ["food", "item"]
// let y = ["cherry", "lightbulb", "Tazmania"]
// let object = arrayManipulator.manipulate(x,y)

// expect(object).toEqual({error: `Arrays must be same length`})
// })

// test(`should convert two arrays of equal length to a single object with key-values from the arrays`, () => {
// let arrayManipulator = new AM()
// let x = ["food", "item", "location"]
// let y = ["cherry", "lightbulb", "Tazmania"]
// let object = arrayManipulator.manipulate(x,y)

// expect(object).toEqual(
//     {
//         food: "cherry",
//         item: "lightbulb",
//         location: "Tazmania"
//       })
// })

// EXERCISE 1

const E = require(`./code`)

// test(`isEven should return true if even, false otherwise`, () => {
//     let exercise = new E()
//     let x = 5
//     let test = exercise.isEven(x)

//     expect(test).toEqual(false)

// })

// EXERCISE 2

// test(`should remove at least one element from the array`, () => {
//     let exercise = new E ()
//     let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let test = exercise.removeAtLeastOne(array)

//     expect(test.length).toBeLessThan(8)

// } )

// EXERCISE 3
// test(` should return a clean, lowercase string without these symbols`, () => {
//     let exercise = new E ()
//     let str = "#Hey, what's up?!"
//     let symbols = ["!", "#", ".", ",", "'"]
//     let test = exercise.simplify(str)

//     expect(test).not.toContain(symbols)
// })

// EXERCISE 4

// test(`should return error if there isn't atleast one boolean in the array`, () =>{
//     let exercise = new E()
//     let array = [ "dog", "cat", 1, 2]
//     let test = exercise.validate(array)
//     expect(test).toEqual({error: `Need at least one boolean`})
// })

// test(`should return true if there are more trues than false`, () =>{
//     let exercise = new E()
//     let array = [ true, false, true ]
//     let test = exercise.validate(array)

//     expect(test).toEqual(true)
// })

test(`should return false if there are more false than trues`, () => {
    let exercise = new E()
    let array = [ false, false, true]
    let test = exercise.validate(array)

    expect(test).toEqual(false)
})