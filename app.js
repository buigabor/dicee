let randomNumber1;
let randomNumber2;

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const rollBtn = document.getElementById("roll-btn");
console.log(rollBtn);


function rollDices() {
  randomNumber1 = Math.floor((Math.random() * 6)) + 1;
  randomNumber2 = Math.floor((Math.random() * 6)) + 1;
  setDices();
}


function setDices() {
  switch (randomNumber1) {
    case 1:
      img1.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      img1.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      img1.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      img1.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      img1.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      img1.setAttribute("src", "images/dice6.png");
      break;
  }


  switch (randomNumber2) {
    case 1:
      img2.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      img2.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      img2.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      img2.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      img2.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      img2.setAttribute("src", "images/dice6.png");
      break;
  }
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = ('<i class="fas fa-flag"></i> Player 1 Wins!');
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = ('Player 2 Wins! <i class="fas fa-flag"></i>');
  } else {
    document.querySelector("h1").innerHTML = ('Draw!');
  }
}

// if (randomNumber1 === 1) {
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png")
// } else if (randomNumber1 === 2) {
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png")
// } else if (randomNumber1 === 3) {
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png")
// } else if (randomNumber1 === 4) {
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png")
// } else if (randomNumber1 === 5) {
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png")
// } else {
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png")
// }


// if (randomNumber2 === 1) {
//   document.querySelector(".img2").setAttribute("src", "images/dice1.png")
// } else if (randomNumber2 === 2) {
//   document.querySelector(".img2").setAttribute("src", "images/dice2.png")
// } else if (randomNumber2 === 3) {
//   document.querySelector(".img2").setAttribute("src", "images/dice3.png")
// } else if (randomNumber2 === 4) {
//   document.querySelector(".img2").setAttribute("src", "images/dice4.png")
// } else if (randomNumber2 === 5) {
//   document.querySelector(".img2").setAttribute("src", "images/dice5.png")
// } else {
//   document.querySelector(".img2").setAttribute("src", "images/dice6.png")
// }

//Roll the dices









rollBtn.addEventListener("click", rollDices);