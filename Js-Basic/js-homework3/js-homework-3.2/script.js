
function convertYears() {
  let numberOneOrTwo = parseInt(prompt("Enter 1 to convert human years in dog years \n Enter 2 to convert dog years in human years "));
  if (numberOneOrTwo === 1) {
    let humanYears = parseInt(prompt("Enter human years"));
    let convertToDog = humanYears * 7;
    let humanDog = `${humanYears} Human Years - ${convertToDog} Dog Years `;
    return humanDog;
  }
  else if (numberOneOrTwo === 2) {
    let dogYears = parseInt(prompt("Enter dog years"));
    let convertToHumanYears = dogYears / 7;
    let dogHuman = `${dogYears} Dog Years - ${convertToHumanYears.toFixed(0)} Human Years`;
    return dogHuman;
  }
  else return '1 or 2';
}
console.log(convertYears());
















