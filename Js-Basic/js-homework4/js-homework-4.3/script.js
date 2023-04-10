
function myFun(array) {
    let oneString = '';
    for (let i = 0; i < array.length; i++) {
        oneString += array[i] + " ";
    }
    return oneString;
}
console.log(myFun(["Hello", "there", "students", "of", "SEDC", "!"]));


