// EXERCISE 1 WEEK 1 JS FULLSTACK
/*
2) Implement user defined functions that take callbacks as an argument

Assume the JavaScript-array did not offer the filter method. Then you could implement it by yourself. 

a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback (that is with the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.


*/

// 
let names = ["Lars", "Peter", "Jan", "Bo"];
 
function myFilter (array, callback) {
    let returnNewArray = [];
    array.forEach(element => {
        if (callback(element)) {
        returnNewArray.push(callback(element));
    }
    });
    return returnNewArray;
};

// TESTS
//console.log("myfilter " + myFilter(names, element => {if (element.includes('a')) { return element;}}));
//console.log("JS method " +names.filter(element => {if (element.includes('a')) { return element; }}));
// returns 
//myfilter Lars,,Jan,
//JS method Lars,Jan



let arrNumbers = [1,2,3,4,5]

function myMap (array, callback) {
    let returnNewMappedArray = [];
    array.forEach(element => {
        returnNewMappedArray.push(callback(element));
    });
    return returnNewMappedArray;
};
//TEST
//console.log(myMap(arrNumbers, element => {return element * 2}))
//console.log(arrNumbers.map(element => element*2));
//returns 
//[ 2, 4, 6, 8, 10 ]
//[ 2, 4, 6, 8, 10 ]




//3) Using the Prototype property to add new functionality to existing objects
//PROTO FILTER
Array.prototype.myFilterProto = function(callback) {
    let returnNewArray = [];
    this.forEach(element => {
        if (callback(element)) {
        returnNewArray.push(callback(element));
    }
    });
    return returnNewArray;
  };

  var namesProto = ["Lars", "Peter", "Jan", "Bo"];

  var newArrayF =namesProto.myFilterProto(function(name) {return name})

//PROTO MAP
  Array.prototype.myMapProto = function(callback) {
    let returnNewMappedArray = [];
    this.forEach(element => {
        returnNewMappedArray.push(callback(element));
    });
    return returnNewMappedArray;
  };

var newArrayM =arrNumbers.myMapProto(function(number) {return number * 2})

//TEST
//console.log(newArrayF)
//console.log(newArrayM)
//RETURNS 
//[ 'Lars', 'Peter', 'Jan', 'Bo' ]
//[ 2, 4, 6, 8, 10 ]
  
/*
the reduce-method
In most literature (definitely not only JavaScript) you will see map and filter explained together with the reduce function (try to google map filter and reduce), so obviously, this is a method we need to learn.
reduce is used to reduce an array into a single item (a number, string, object, etc). This is a very common problem in all languages. For some specific problems, so common that the array actually has a specific “reduce” function called join,  which can reduce an array into a string separated by whatever we choose.
var all= ["Lars", "Peter", "Jan", "Bo"];


a) Use join to create a single string from all, with names: comma-, space. and  # - separated.
Now let’s create our own reducer functions (see here for info).
*/

var all= ["Lars", "Peter", "Jan", "Bo"];
//console.log(all.join(",")+"     "+all.join(" ")+"     "+all.join("#")); 
// returns Lars,Peter,Jan,Bo     Lars Peter Jan Bo     Lars#Peter#Jan#Bo


/*b) Given this array: var numbers = [2, 3, 67, 33]; 
Create a reducer function that will return the sum (105) of all values in numbers
*/
var numbers = [2, 3, 67, 33]; 
function numbersR(val, accumulator) {
    return val + accumulator;
}
//console.log(numbers.reduce(numbersR))
//returns 105
  

/*
c)  Given this array:
let members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22},
]
Create a reducer function that will return the average age of all members. */
let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]
var reducerMembers = function(accumulator, member,index,arr ){
    accumulator = accumulator + member.age;
    if (index === arr.length - 1) {
        return accumulator / arr.length;
    }
    return accumulator;
}

//console.log(members.reduce(reducerMembers, 0));
//returns 105
