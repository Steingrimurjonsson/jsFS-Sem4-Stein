interface myFunc {
    (one: string, two: string, three: string): string[];
}

var myFuncImplementerPlusUppercase: myFunc=(one:string, two:string, three:string) => {
    //return [one, two, three] for the first one
    return [one, two, three].map(str => { return str.toUpperCase() })
}
console.log(myFuncImplementerPlusUppercase('somestring1', 'somestring2', 'somestring3',));
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}
//test 
f2(myFuncImplementerPlusUppercase)
