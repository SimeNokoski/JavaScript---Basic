let list = document.getElementById("list");
let receptName = prompt("Recept Name");
let howManyIngredients  = parseInt(prompt("How many ingredients do we need for the recipe"));
let nameOfIngredients;
let item = '';
if(!isNaN(receptName) || isNaN(howManyIngredients)){
    alert("Error");
}
else {
list.innerHTML += `<h1> ${receptName} </h1>`;
for(let i =0 ; i<howManyIngredients;i++){
    nameOfIngredients = prompt("ime na sostojki");
    item+=`<li> ${nameOfIngredients} </li>`;
}
list.innerHTML +=  `<ul> ${item}  </ul>`;
}



// let receptName = prompt("Recept Name");
// let howManyIngredients = parseInt(prompt("How many ingredients do we need for the recipe"));
// let nameOfIngredients;


// let list = document.getElementById("list");
// list.innerHTML += `<h1> ${receptName} </h1>`;
//  let item = '';
// for(let i =0 ; i<howManyIngredients;i++){
//     nameOfIngredients = prompt("ime na sostojki");
//     item+=`<td> ${nameOfIngredients} </td>`;
// }
// list.innerHTML +=  `<table> <tr>${item}  </tr></table>`;
 


// let list = document.getElementById("list");
// let receptName = prompt("Recept Name");
// let howManyIngredients  = parseInt(prompt("How many ingredients do we need for the recipe"));
// let nameOfIngredients;
// let item = '';

// list.innerHTML += `<h1> ${receptName} </h1>`;
// for(let i =0 ; i<howManyIngredients;i++){
//     nameOfIngredients = prompt("ime na sostojki");
//     item+=`<li> ${nameOfIngredients} </li>`;
// }
// list.innerHTML +=  `<ul> ${item}  </ul>`;

 




 
 
 







