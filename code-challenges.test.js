// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
const secretCodeWord1 = "Lackadaisical"
const secretCodeWord2 = "Gobbledygook"
const secretCodeWord3 = "Eccentric"

describe("codedMessage", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
      expect(codedMessage(secretCodeWord1)).toEqual(("L4ck4d41s1c4l"))
      expect(codedMessage(secretCodeWord2)).toEqual(("G0bbl3dyg00k"))
      expect(codedMessage(secretCodeWord3)).toEqual(("3cc3ntr1c"))
    })
  })

//======================== GOOD ERROR FAILURE ===============================//
// ● codedMessage › takes in a string and returns a coded message. 
// The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// ReferenceError: codedMessage is not defined
//===========================================================================//


// b) Create the function that makes the test pass.
//========================== PSEUDO CODE ====================================//
//create a function called "codedMessage".
//must take in a string as a parameter named "str"
//declare a new variable named "newCode" and set it equals to str.split() which would turn the
//string into an array and .map() to iterate through the array to return the same 
//amount of values. 
//convert letters of "a" => 4, "e" => 3, "i" => 1, and "o" => 0 by using a conditional
//if/else statement. 
//if value is strictly equals to 'a' and utilize the .toLowerCase() method to turn the string into lowercase 
//then return "4" to convert the letter to a number, repeat the same process with the other 
//letters in the else if statements. and lastly set else condition to return just the value
//in order for it to return the letter that doesnt meet those conditions.
//return the new declared variable "newCode" 

//===========================================================================//
const codedMessage = (str) => {
    let newCode = str.split("").map(v => {
      if (v.toLowerCase() === 'a') {
        return "4" 
      } else if (v.toLowerCase() === 'e') {
        return "3"
      } else if (v.toLowerCase() === 'i') {
        return "1" 
      } else if (v.toLowerCase() === 'o') {
        return "0"
      } else {
        return v
      }
    })
    return newCode.join("")
  }
  

// TEST PASSED!




// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.
const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"

describe("letterWord", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
      expect(letterWord(arrayOfWords1, letterA)).toEqual((["Apple", "Banana", "Orange"]))
      expect(letterWord(arrayOfWords2, letterE)).toEqual((["Cherry", "Blueberry", "Peach"]))
    })
  })

//======================== GOOD ERROR FAILURE ===============================//
// ● letterWord › takes in an array of words and a single letter and returns all 
//the words that contain that particular letter.

// ReferenceError: letterWord is not defined
//===========================================================================//


// b) Create the function that makes the test pass.
//========================== PSEUDO CODE ====================================//
//create a function called "letterWord"
//must take in an array and a string as parameters, which i'll set to "arr, ltr"
//utilize the .filter() higher order function to iterate through the array
//set the value to "v" and set v to .toLowerCase() method to make the values
//lowercased, and to .includes() method with the "ltr" parameter as an argument
//by doing so, this will check if any of the value in the array includes the 
//letter.
//return "v", which contains an array of strings that only includes the 
//letter that was passed in the second argument.
//===========================================================================//
const letterWord = (arr, ltr) => {
    return arr.filter(v => v.toLowerCase().includes(ltr)
    )
  }
  

//TEST PASSED!



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
      expect(fullHouse(hand1)).toEqual((true))
      expect(fullHouse(hand2)).toEqual((false))
      expect(fullHouse(hand3)).toEqual((false))
    })
  })

//======================== GOOD ERROR FAILURE ===============================//
// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house.

// ReferenceError: fullHouse is not defined
//===========================================================================//


// b) Create the function that makes the test pass.
//========================== PSEUDO CODE ====================================//
//create a function called "fullHouse"
//must take in an array of numbers as a parameter, which would be named "arr"
//sort the array by using the .sort() method from smallest to largest (a,b => a-b) 
//by doing so it will group the same numbers if they exist in order
//use a condition if/else statement to check 2 different scenarios
//if index 0 is the same as index 2 AND index 3 is the same as index 4
//OR if index 0 is the same as index 1 AND index 2 is the same as index 4
//then the statement is true.
//also check another condition for 5 of a kind, if 0 index and index 4 are the same, then return false
// everything else, return false 
//===========================================================================//
const fullHouse = (arr) => {
    arr.sort((a,b)=> a - b)
    if (arr[0] === arr[2] && arr[3] === arr[4] ||
      arr[0] === arr[1] && arr[2] === arr[4]) {
        return true
      } else if (arr[0] === arr[4]) {
        return false
      } else {
        return false
      }
  }

  //TEST PASSED!