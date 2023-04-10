let number = prompt("Year of Birth");
let year = parseInt(number);
let result = (year - 4) % 12;

if (isNaN(year)) {
    console.log("Enter a year");
}
else if (result === 0) {
    console.log(`${year} Chinese Zodiac is RAT`);
}
else if (result === 1) {
    console.log(`${year} Chinese Zodiac is OX`);
}
else if (result === 2) {
    console.log(`${year} Chinese Zodiac is TIGER`);
}
else if (result === 3) {
    console.log(`${year} Chinese Zodiac is RABBIT`);
}
else if (result === 4) {
    console.log(`${year} Chinese Zodiac is DRAGON`);
}
else if (result === 5) {
    console.log(`${year} Chinese Zodiac is SNAKE`);
}
else if (result === 6) {
    console.log(`${year} Chinese Zodiac is HORSE`);
}
else if (result === 7) {
    console.log(`${year} Chinese Zodiac is GOAT`);
}
else if (result === 8) {
    console.log(`${year} Chinese Zodiac is MONKEY`);
}
else if (result === 9) {
    console.log(`${year} Chinese Zodiac is ROOSTER`);
}
else if (result === 10) {
    console.log(`${year} Chinese Zodiac is DOG`);
}
else if (result === 11) {
    console.log(`${year} Chinese Zodiac is PIG`);
}
else {
    console.log("Wrong year");
}







