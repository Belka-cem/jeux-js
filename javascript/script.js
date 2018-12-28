/* container principal*/

let container = document.createElement("div")
document.body.appendChild(container)
container.style.display = "inherit"




/* container nom du jeu */

let nameC = document.createElement("div")
container.appendChild(nameC)
let nameGameL = document.createElement("h2")
nameGameL.textContent = "ReflexLettre"
nameC.appendChild(nameGameL)


/* regle du jeux*/

let rulesC = document.createElement("div")
container.appendChild(rulesC)
let rulesL = document.createElement("h3")
rulesL.textContent = "Appyer sur la bonne lettre avnat la fin du temps"
rulesC.appendChild(rulesL)

// bouton demarrer */

let startC = document.createElement("div")
container.appendChild(startC)
let startB = document.createElement("input")
startC.appendChild(startB)
startB.type = "button"
startB.value = "Démarrer"

/*jeu debuter */
let inGame = false;

/* ecouteur d'evenements */

startB.addEventListener("click", functionDemarrer, false)




/* 2 eme interphace */


/* container */
let container2 = document.createElement("div")
document.body.appendChild(container2)
container2.style.display = "none"

let row1 = document.createElement("div")
container2.appendChild(row1)
let nameGameL2 = document.createElement("label")
nameGameL2.textContent = "ReflexLettre   "
row1.appendChild(nameGameL2)

let scoreL = document.createElement("label")
scoreL.textContent = "Score   "
row1.appendChild(scoreL)

let scoreMinimum = 0
let scoreP = document.createElement("p")
scoreP.textContent = "0"
row1.appendChild(scoreP)


let tempsL = document.createElement("label")
tempsL.textContent = "Temps restant"
row1.appendChild(tempsL)



/* function */
function functionDemarrer() {
  inGame = true
  container.style.display = "none"
  container2.style.display = "inherit"
  intervalId = setInterval(diminuerCompteur, 1000)
}


let row2 = document.createElement("div")
container2.appendChild(row2)
let lettreP = document.createElement("p")
row2.appendChild(lettreP)
let lettre26 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "I", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let min = 0
let max = lettre26.length - 1;
let lettreRandom = Math.floor(Math.random() * (25 - 1)) + 1;
let displayLetter = lettre26[lettreRandom];
lettreP.textContent = displayLetter;

/* temps */


let temps = 3
let tempsRestant = document.createElement("p")
tempsRestant.textContent = temps
row1.appendChild(tempsRestant)




function diminuerCompteur() {
  if (temps > 0) {
    tempsRestant.textContent = temps--
  } else {
    clearInterval(intervalId);
    containerPerdu.style.display = "inherit"
    container2.style.display = "none"
  }
}


/* lettre aléatoire */


window.addEventListener("keydown", function keyPush(event) {
  if (inGame) {


    if (event.key === lettreP.textContent.toLowerCase()) {
      lettreRandom = Math.floor(Math.random() * (25 - 1)) + 1;
      displayLetter = lettre26[lettreRandom];
      lettreP.textContent = displayLetter;
      scoreP.textContent = scoreMinimum++;
      temps = 3
      scoreFinalLabel.textContent = scoreMinimum

      if (scoreMinimum > 10 && scoreMinimum < 25) {
        temps = 2

      }

      if (scoreMinimum > 25 && scoreMinimum < 100) {
        temps = 1

      }

    } else {
      containerPerdu.style.display = "inherit"
      container2.style.display = "none"
      inGame = false;
      scoreFinalLabel.textContent = "votre score est de " + scoreMinimum

    }

  }
}, false);

/* perdu */

let containerPerdu = document.createElement("div")
document.body.appendChild(containerPerdu)
containerPerdu.style.display = "none";

let perduLabel = document.createElement("h3")
containerPerdu.appendChild(perduLabel)
perduLabel.textContent = "vous avez perdu"

let scoreFinalLabel = document.createElement("h3")
containerPerdu.appendChild(scoreFinalLabel)
scoreFinalLabel.textContent = "votre score est de " + scoreMinimum

let boutonD = document.createElement("div")
let boutonRecomenncer = document.createElement("input")
containerPerdu.appendChild(boutonD)
boutonD.appendChild(boutonRecomenncer)
boutonRecomenncer.type = "button"
boutonRecomenncer.value = "Recommencer"

boutonRecomenncer.addEventListener("click", functionRecommencer, false)

function functionRecommencer() {
  containerPerdu.style.display = "none"
  container2.style.display = "inherit"
  inGame = true

  scoreMinimum = 0
  temps = 3
  scoreP.textContent = scoreMinimum
  tempsRestant.textContent = temps



}
