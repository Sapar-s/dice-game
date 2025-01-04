var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  // buusan too ni 1 ees ylgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulen.
  if (diceNumber !== 1) {
    // 1 ees oor too buunaa , buusan toog toglogchid nemj ogno
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogciin eeljiig solij ogno

    // ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // toglogchiin eeljiig nogoo toglogchruu solih

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // shoog tur alga bolgono
    diceDom.style.display = " none";
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  // Ug toglogchiin tsugluulsan eeljiin onoog global onoon deer n nemj ogno
  scores[activePlayer] += roundScore;
  // Delgets deer onoog ni oorchlono
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Eeljiin onoog n 0 bolgono
  // ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // toglogchiin eeljiig nogoo toglogchruu solih

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // shoog tur alga bolgono
  diceDom.style.display = " none";
  // Toglogchiin eeljiig solino
});

// document.querySelector(".btn-new").addEventListener("click", function () {
//   activePlayer = 0;

//   scores = [0, 0];

//   roundScore = 0;
// });
