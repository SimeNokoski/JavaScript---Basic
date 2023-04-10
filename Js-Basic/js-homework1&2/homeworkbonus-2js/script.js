let number = prompt("Kolku pari imas");
let money = parseInt(number);

if (isNaN(money)) {
    alert("Vnesi suma na pari");
}
else if (money >= 10000) {
    alert("Imate mnogu pari");
}
else if (money < 10000 && money >= 5000) {
    alert("Imate sredno pari");
}
else if (money < 5000 && money >= 500) {
    alert("Imate slabo pari");
}
else if (money < 500 && money >= 100) {
    alert("Ke bide podobro");
}
else {
    alert("To e to");
}
