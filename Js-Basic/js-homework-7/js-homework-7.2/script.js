let title = document.getElementById("title");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
let trueOrFalse = document.getElementById("trueorfalse");

let niza = [];

class books {
    constructor(titleBook, authotBook, readingStatus) {
        this.titleBook = titleBook;
        this.authotBook = authotBook;
        this.readingStatus = readingStatus;
    }
    result(arr) {
        ul.innerHTML = "";
        for (let i of arr) {
            if (i.readingStatus === 'true') {
                ul.innerHTML += `<li>Already read '${i.titleBook}' by ${i.authotBook}. </li>`;
            }
            else if (i.readingStatus === 'false') {
                ul.innerHTML += `<li>You still need to read '${i.titleBook}' by ${i.authotBook}. </li>`;
            }
            else {
                ul.innerHTML += "";
            }
        }
    }
}
btn.addEventListener("click", function () {
    let naslov = title.value;
    let avtor = author.value;
    let falseOrTrue = trueOrFalse.value;
    let book = new books(naslov, avtor, falseOrTrue);
    niza.push(book);
    book.result(niza);

    title.value = "";
    author.value = "";
    trueOrFalse.value = "";
})


















// let title = document.getElementById("title");
// let author = document.getElementById("author");
// let btn = document.getElementById("btn");
// let ul = document.getElementById("ul");
// let trueOrFalse = document.getElementById("trueorfalse");

// let niza = [];

// function book(titleBook,authotBook,readingStatus) {
//         this.titleBook = titleBook;
//         this.authotBook = authotBook;
//         this.readingStatus = readingStatus;


//  this.result = function(arr) {
//         ul.innerHTML = "";
//         for (let i of arr) {
//             if (i.readingStatus === 'true') {
//                 ul.innerHTML += `<li>Already read '${i.titleBook}' by ${i.authotBook}. </li>`;
//             }
//             else if (i.readingStatus === 'false') {
//                 ul.innerHTML += `<li>You still need to read '${i.titleBook}' by ${i.authotBook}. </li>`;
//             }
//             else {
//                 ul.innerHTML += "";
//             }
//         }
//     }
// }
// btn.addEventListener("click", function () {
//     let naslov = title.value;
//     let avtor = author.value;
//     let falseOrTrue = trueOrFalse.value;
//     let newBook = new book(naslov, avtor, falseOrTrue);
//     niza.push(newBook);
//     newBook.result(niza);

//     title.value = "";
//     author.value = "";
//     trueOrFalse.value = "";
// })


