function myFun(p) {
    return typeof p;
}

console.log(myFun(null));
console.log(myFun(true));
console.log(myFun(8));
console.log(myFun("sime"));
console.log(myFun());
