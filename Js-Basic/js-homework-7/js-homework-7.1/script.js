let inpname = document.getElementById("name");
let inpkind = document.getElementById("kind");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");

let arr = [];
class animals{
    constructor(name,kind){
        this.name = name;
        this.kind = kind;
    }
    speak(niza){
        ul.innerHTML = "";
        for(let i of niza){
            ul.innerHTML += `<li>${i.kind} says: hey bro</li>`;
        }
    }
}

btn.addEventListener("click",function(){
    let animalName = inpname.value;
    let animalKind = inpkind.value;
    let animal = new animals(animalName,animalKind);
    arr.push(animal);

    animal.speak(arr);
   
})