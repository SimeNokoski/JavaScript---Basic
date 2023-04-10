let list = document.getElementById("list");
let array = [5, 10, 15, 20, 6, 4];
let sum = 0;
let li = '';
let equasion = '';

for (let i = 0; i < array.length; i++) {
    sum += array[i];
    li += `<li> ${array[i]} </li> `;
    if (i === array.length - 1) {
        equasion += `${array[i]} = `;
    }
    else {
        equasion += `${array[i]} + `;
    }
}

list.innerHTML += `<ul> ${li} </ul>`;
list.innerHTML += `<h3> Sum = ${sum} </h3>`;
list.innerHTML += `${equasion} ${sum}`;









