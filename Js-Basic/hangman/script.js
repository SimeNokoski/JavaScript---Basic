
let clue = document.getElementById("clue");
let btn = document.querySelectorAll(".btn");
let newGame = document.getElementById("newGame");
let hint = document.getElementById("hint");
let lives = document.getElementById("lives");
let winLost = document.getElementById("winLost");
let myimg = document.getElementById("img");
let category = document.getElementById("category");
let box = document.getElementById("box");
let correctWord = document.getElementById("correctWord");
let btnCategoryDiv = document.getElementById("btnCategoryDiv");

box.style.display = `none`;
correctWord.style.display = `none`;

let random1 = ["golf", "audi", "bmw", "fiat", "alfa"];
let random2 = ["srbija", "hrvatska", "bosna", "rusija", "polska"];
let random3 = ["kicevo", "skopje", "ohrid", "stip", "krusevo"];

let hint1 = ["volkswagen", "logo with 4 circles", "popular german vehicle", "punto", "romeo"];
let hint2 = ["nikola tesla", "luka modric", "dino merlin", "vladimir putin", "lewandowski"];
let hint3 = ["kitino kale", "glaven grad", "lake", "best food", "tose proeski"];

let btnCategory1 = document.getElementById("btnCategory1");
btnCategory1.addEventListener("click", function () {
  box.style.display = `block`;
  btnCategoryDiv.style.display = `none`;
  correctWord.style.display = `flex`;
  const randomWord = random1[(Math.floor(Math.random() * (random1.length)))];
  category.innerHTML = `Category - ${btnCategory1.textContent}`
  //console.log(randomWord)
  hints(random1, hint1, randomWord)
  addCorrectWord(randomWord)
  finish(randomWord)
})

let btnCategory2 = document.getElementById("btnCategory2");
btnCategory2.addEventListener("click", function () {
  box.style.display = `block`;
  btnCategoryDiv.style.display = `none`;
  correctWord.style.display = `flex`;
  const randomWord = random2[(Math.floor(Math.random() * (random2.length)))];
  //console.log(randomWord)
  category.innerHTML = `Category - ${btnCategory2.textContent}`
  hints(random2, hint2, randomWord)
  addCorrectWord(randomWord)
  finish(randomWord)
})

let btnCategory3 = document.getElementById("btnCategory3");
btnCategory3.addEventListener("click", function () {
  box.style.display = `block`;
  btnCategoryDiv.style.display = `none`;
  correctWord.style.display = `flex`;
  const randomWord = random3[(Math.floor(Math.random() * (random3.length)))];
  category.innerHTML = `Category - ${btnCategory3.textContent}`
  //console.log(randomWord)
  hints(random3, hint3, randomWord)
  addCorrectWord(randomWord)
  finish(randomWord)
})

function hints(random, hints, randomWord) {
  hint.addEventListener("click", function () {
    for (let i = 0; i < random.length; i++) {
      for (let j = 0; j < hints.length; j++) {
        if (i === j) {
          if (randomWord === random[i]) {
            clue.innerHTML = `Clue - ${hints[j]};`
          }
        }
      }
    }
  })
}

function addCorrectWord(randomWord) {
  for (let i = 0; i < randomWord.length; i++) {
    let letters = document.createElement("button");
    letters.classList.add("letters");
    correctWord.appendChild(letters);
  }
}

function reload() {
  newGame.addEventListener("click", function () {
    location.reload();
  })
}
reload();

function lost(counterLives, counter1, randomWord) {
  if (counterLives === 0 && counter1 !== randomWord.length) {
    correctWord.innerHTML = `The word is: ${randomWord} <br>I'm sorry try again`;
    correctWord.style.fontSize = `20px`;
    correctWord.style.color = `red`
    clue.style.display = `none`;
    myimg.src = "./img/Hangman-9.png";
    winLost.innerHTML = "Lost";
    winLost.style.color = "red";
    winLost.style.textShadow = "2px 2px"
    winLost.style.fontSize = "3rem";
    lives.innerText = "";
  }
}

function winner(counter1, counterLives, randomWord) {
  if (counter1 === randomWord.length && counterLives > 0) {
    winLost.innerHTML = "Winner";
    winLost.style.color = "blue";
    winLost.style.textShadow = "2px 2px"
    winLost.style.fontSize = "3rem";
    lives.innerText = ``;
  }
  if (counterLives === 6 && counter1 !== randomWord.length) {
    myimg.src = "./img/images.jfif";
    lives.innerText = `You have ${counterLives} lives`;
  }
  if (counterLives === 5 && counter1 !== randomWord.length) {
    myimg.src = "./img/Hangman-0.png";
    lives.innerText = `You have ${counterLives} lives`;
  }
  if (counterLives === 4 && counter1 !== randomWord.length) {
    myimg.src = "./img/Hangman-1.png";
    lives.innerText = `You have ${counterLives} lives`;
  }
  if (counterLives === 3 && counter1 !== randomWord.length) {
    myimg.src = "./img/Hangman-2.png";
    lives.innerText = `You have ${counterLives} lives`;
  }
  if (counterLives === 2 && counter1 !== randomWord.length) {
    myimg.src = "./img/Hangman-4.png";
    lives.innerText = `You have ${counterLives} lives`;
  }
  if (counterLives === 1 && counter1 !== randomWord.length) {
    myimg.src = "./img/Hangman-6.png";
    lives.innerText = `You have ${counterLives} lives`;
  }
}

function finish(randomWord) {
  let letters = document.querySelectorAll(".letters");
  let counter1 = 0;
  let counter2 = 0;
  let counterLives = 6;
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      reload();
      btn[i].disabled = true;
      for (let j = 0; j < randomWord.length, j < letters.length; j++) {
        if (randomWord[j] === btn[i].textContent) {
          counter1++;
          counter2++;
          letters[j].innerHTML = randomWord[j];
          letters[j].style.borderBottom = `none`
        }
      }
      if (counter2 === 0) {
        counterLives--;
      }
      winner(counter1, counterLives, randomWord);
      lost(counterLives, counter1, randomWord);
      counter2 = 0;
    })
  }
}
