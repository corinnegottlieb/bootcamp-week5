// const add = function(a, b){
//     return a - b
// }
// module.exports = add

// const calculateHyp = function(a,b){
//     return Math.sqrt(a*a + b*b)   
// }

// module.exports = calculateHyp

// const removeBugs = function (code) {
//     return code.map(c => c != "BUG")
// }

// module.exports = removeBugs

// const clearLowPriority = function(array){
// return array.filter(a=>a.priority = "HIGH")
// }

// module.exports = clearLowPriority

// class PictureManager {
//     constructor() {
//         this.pictureURLs = []
//     }

//     addPicture(picURL) {
//         this.pictureURLs.push(picURL)
//     }

//     removePicture(picURL) {
//         this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
//     }
// }

// module.exports = PictureManager



class ArrayManipulator {
    manipulate(arr1, arr2) {
        let obj = {}
        if (arr1.length === arr2.length) {
        for (let i in arr1) {
            obj[arr1[i]] = arr2[i]
        }
        return obj
    }
    else return {error : "Arrays must be same length"}
}}

module.exports = ArrayManipulator

// EXERCISE 1

class Exercise {
//should return true if n is even, false otherwise
isEven(n) {
    return n % 2 == 0 ? true : false
}

//should remove at least one element from the array `arr`
removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
}

//should return a clean, lowercase string without these symbols: "!", "#", ".", ",", "'"
simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}

validate(arr) {
    let trues = []
    let falses = []
    arr.forEach(a => { 
        if (a === true)
        {trues.push.a}
        if (a === false){
            {falses.push.a}
        }
       
})
if (trues.length > falses.length){
    return true
}
if (falses.length >trues.length) {
    return false
}
}
}
module.exports = Exercise