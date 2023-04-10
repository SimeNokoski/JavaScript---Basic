let row = document.getElementById("row");
let colum = document.getElementById("colum");
let table = document.getElementById("table");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	let sum = '';
	for (let i = 0; i < row.value; i++) {
		sum += `<tr>`;
		for (let j = 0; j < colum.value; j++) {
			sum += `<td> ${i}/${j}</td>`;
		}
		sum += `</tr>`;
	}
	console.log(table.children)
	table.style.border = "1px solid black";
	table.innerHTML += sum;
	row.value = "";
	colum.value = "";
})


// let row = document.getElementById("row");
// let colum = document.getElementById("colum");
// let table = document.getElementById("table");
// let btn = document.getElementById("btn");

//   function myFun() {
// 	let sum = '';
// 	for (let i = 0; i < row.value; i++) {
// 		sum += `<tr>`;
// 		for (let j = 0; j < colum.value; j++) {
// 			sum += `<td style="border: 1px solid black;"> ${i}/${j}</td>`;
// 		}
// 		sum += `</tr>`;
// 	}
// 	table.style.border = "1px solid black";
// 	table.innerHTML += sum;
// 	row.value = "";
// 	colum.value = "";
// }
// btn.addEventListener("click",myFun);




