const readline = require("readline");

const game = ['pierre', 'feuille', 'ciseaux'];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let playerScore = 0;
let computerScore = 0;

const playGame = (playerChoice) => {
    const computerChoice = game[Math.floor(Math.random() * game.length)];
    console.log(`Vous avez choisi : ${playerChoice}`);
    console.log(`L'ordinateur a choisi : ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log('Match nul');
    } else if (
        (playerChoice === "pierre" && computerChoice === "ciseaux") ||
        (playerChoice === "feuille" && computerChoice === "pierre") ||
        (playerChoice === "ciseaux" && computerChoice === "feuille")
    ) {
        console.log('Vous avez gagné');
        playerScore++;
    } else {
        console.log('L\'ordinateur a gagné');
        computerScore++;
    }
    console.log(`Score du joueur : ${playerScore} Score de l'ordinateur : ${computerScore}`);
};

rl.setPrompt("Choisissez pierre, feuille ou ciseaux ('exit' pour quitter) > ");
rl.prompt();

rl.on("line", (input) => {
    if (input.toLowerCase() === "exit") {
        rl.close();
    } else if (game.includes(input)){
        playGame(input);
        rl.prompt();
    } else {
        console.log('Choix invalide. Réessayez');
        rl.prompt();
    }
    if (computerScore === 3) {
        console.log('Vous avez perdu la partie');
        rl.close();
    } else if (playerScore === 3) {
        console.log('Vous avez gagné la partie');
        rl.close();
    }
}).on("close", () => {
    console.log("Bonne journée !");
    process.exit(0);
});
