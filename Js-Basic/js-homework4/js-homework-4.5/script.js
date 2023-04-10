function minMax(array) {
    let max = -Infinity;
    let min = Infinity;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    sum = max + min;
    return `sum = ${sum}, max = ${max}, min = ${min}`;
}
console.log(minMax([45, 3, 5, 2, 86, 5]));


function myFun(array) {
    let max = -Infinity;
    let min = Infinity;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            if (array[i] > max) {
                max = array[i];
            }
            if (array[i] < min) {
                min = array[i];
            }
        }
    }
    sum = max + min;
    return `sum = ${sum}, max = ${max}, min = ${min}`;
}
console.log(myFun([4, true, 54, "", null, 35, [], "25", 5]));