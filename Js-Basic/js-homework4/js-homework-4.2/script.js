let array = [5, 4, 7, 2, 20];
let array1 = [5, 32, 5, 3,null,true,"String",""];
function myFun(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function validateNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'number') {
            return `Error`;
        }
    }
    return myFun(array);
}
console.log(validateNumber(array));
console.log(validateNumber(array1));










