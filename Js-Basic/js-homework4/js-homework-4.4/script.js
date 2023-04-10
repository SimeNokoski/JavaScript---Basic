let a = [];
for (let i = 1; i <= 20; i++) {
    a += [i];
    if (i % 2 === 0) {
        a += '\n';
    }
    else {
        a += " ";
    }
}
console.log(a);


// let proba2 = [];
// let proba1 = [1, 2, 3, 4, 5, 7, 9, 12, 13, 14, 15];
// for (let i = 1; i < proba1.length; i++) {
//     proba2 += proba1[i]
//     if (proba1[i] % 2 === 0) {
//         proba2 += '\n';
//     }
//     else {
//         proba2 += " ";
//     }
// }
// console.log(proba2);

