function calculateAge(yearOfBirth) {
    let currentYear = new Date().getFullYear();
    let calculate = currentYear - yearOfBirth;
    return `Your age is ${calculate}`;
}

console.log(calculateAge(1999));
console.log(calculateAge(2000));
console.log(calculateAge(2020));

