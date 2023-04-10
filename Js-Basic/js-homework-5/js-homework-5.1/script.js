
let firstDiv = document.getElementById("first");
firstDiv.firstElementChild.innerText = "Change of first h1";
firstDiv.lastElementChild.innerText = "Change of first paragraph";

let anotherDiv = document.getElementsByClassName("second")[0];
anotherDiv.innerText = 'Change of last paragraph';
let text = document.getElementsByTagName("text")[0];
text.innerText = 'Change of text';

let lastDiv = document.getElementsByTagName("div")[2];
lastDiv.firstElementChild.innerText = 'Change of last h1';
lastDiv.lastElementChild.innerText = 'Change of h3';






