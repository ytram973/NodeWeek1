const readline = require("readline");
const { playGame, game } = require("./utils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let end = false;
let scores = { playerScore: 0, computerScore: 0 };

rl.setPrompt("Choisissez pierre, papier ou ciseaux ('q' pour quitter) > ");
rl.prompt();

rl.on("line", (input) => {
  if (end) {
    if (input.toLowerCase() === "y") {
      scores.playerScore = 0;
      scores.computerScore = 0;
      end = false;
      rl.setPrompt("Choisissez pierre, papier ou ciseaux ('q' pour quitter) > ");
      rl.prompt();
    } else if (input.toLowerCase() === "n") {
      rl.close();
    }
  } else {
    if (input.toLowerCase() === "q") {
      rl.close();
    } else if (game.includes(input)) {
      scores = playGame(input);
      if (scores.computerScore === 3) {
        console.log("Vous avez perdu la partie");
        end = true;
        rl.setPrompt("Voulez vous rejouer ? (y/n) >");
        rl.prompt();
      } else if (scores.playerScore === 3) {
        console.log("Vous avez gagné la partie");
        end = true;
        rl.setPrompt("Voulez vous rejouer ? (y/n) >");
        rl.prompt();
      } else {
        rl.prompt();
      }
    } else {
      console.log("choix invalide. Réessayez");
      rl.prompt();
    }
  }
});

rl.on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});
