const totalMoney = 10000;

function calculation() {
    let cashOut = parseInt(prompt("Kolku pari sakate da podignete"));
    if (cashOut > totalMoney) {
        return "Nemate dovolno pari";
    }
    else if (cashOut < 1 || isNaN(cashOut)) {
        return "Greska";
    }
    else {
        let calculationMoney = totalMoney - cashOut;
        return `Povleceni se ${cashOut} den a ostanati vi se ${calculationMoney} den`;
    }
}


function atm() {
    let oneOrTwo = parseInt(prompt("Vnesete 1 za proverka na sostojba \n Vnesete 2 za podiganje na pari"));
    if (oneOrTwo == 1) {
        console.log(`Na smetka imate ${totalMoney} den`);
    }
    else if (oneOrTwo == 2) {
        console.log(calculation());
    }
    else {
        console.log("Vnesete 1 ili 2");
    }
}

atm();
