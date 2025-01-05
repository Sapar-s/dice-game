// Togloomiin buh gazart ashiglah huvsagch zarlay
var activePlayer, scores, roundScore;

// Game duussan esehiig hadgalah toloviin huvsagch
var isNewGame;

// Shoonii zurgiig uzuuleh elementiig haij olood end hadgalah
var diceDom = document.querySelector(".dice");

// Shine togloom ehluuleh function
function initGame() {
  // Togloom ehellee gedeg tolovt oruulna.
  isNewGame = true;

  activePlayer = 0;

  scores = [0, 0];

  roundScore = 0;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

initGame();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (!isNewGame) {
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж эхлэнэ үү");
  } else {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    // buusan too ni 1 ees ylgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulen.
    if (diceNumber !== 1) {
      // 1 ees oor too buunaa , buusan toog toglogchid nemj ogno
      roundScore += diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // Daraagiin toglogchid shiljuulen
      switchToNextPlayer();
    }
  }

  //  else {
  // alert("Тоглоом дууссан байна. NEW GAME товчийг дарж эхлэнэ үү");
  // }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (!isNewGame) {
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж эхлэнэ үү");
  } else {
    // Ug toglogchiin tsugluulsan eeljiin onoog global onoon deer n nemj ogno
    scores[activePlayer] += roundScore;

    // Delgets deer onoog ni oorchlono
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Ug toglogch hojson esehiig shalgah function
    if (scores[activePlayer] >= 100) {
      // Game duussan tolovt oruulna
      isNewGame = false;

      // Ylagch gesen text gargana
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      diceDom.style.display = "none";
    } else {
      // Toglogchiin eeljiig solino
      switchToNextPlayer();
    }
  }

  //  else {
  //     alert("Тоглоом дууссан байна. NEW GAME товчийг дарж эхлэнэ үү");
  //   }
});

function switchToNextPlayer() {
  // Eeljiin onoog n 0 bolgono
  // ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // toglogchiin eeljiig nogoo toglogchruu solih

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tur alga bolgono
  diceDom.style.display = " none";
}

// Shine togloom ehluuleh btn
document.querySelector(".btn-new").addEventListener("click", initGame);
