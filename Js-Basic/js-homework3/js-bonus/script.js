function shouldServeDrinks(personAge, onBreak) {
    if (personAge >= 18 && onBreak === false) {
        return true;
    }
    else {
        return false;
    }
}
console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(19, false));
console.log(shouldServeDrinks(30, true));