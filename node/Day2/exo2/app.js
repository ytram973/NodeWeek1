// process.stdin.setEncoding('utf8');

// const readline = require('readline');

// process.stdin.on('data', (input) => {
// input = input.toString();
// input.includes('stop') ? process.stdin.pause() : console.log(input);
// });

// process.stdin.on('pause', () =>  process.stdout.write('Bye bye!'));

// const readline = require('readline');

// const students = ['Alan', 'Sonia', 'Sophie'];

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Entrez un nom d\'étudiant : ', (answer) => {
//   const name = answer.trim().toLowerCase();

//   const foundStudent = students.find((student) => {
//     return student.toLowerCase().replace(/\s/g, '') === name;
//   });

//   if (foundStudent) {
//     console.log(`L'étudiant ${foundStudent} a été trouvé !`);
//   } else {
//     console.log(`Aucun étudiant trouvé avec le nom "${name}".`);
//   }

//   rl.close();
// })



const readline = require("readline");

const game = ['pierre', 'feuille', 'ciseaux'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let playerScore = 0;
  let computerScore = 0

  const playGame = (playerChoice) => {
    const computerChoice = game[Math.floor(Math.random() * game.length)]
    console.log(`Vous avez choisi : ${playerChoice}`);
    console.log(`L'ordinateur a choisi : ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log('Match nul');
    } else if (
        (playerChoice === "pierre" && computerChoice === "ciseaux") ||
        (playerChoice === "feuille" && computerChoice === "pierre") ||
        (playerChoice === "ciseaux" && computerChoice === "feuille")
    ) {
        console.log('You win');
        playerScore++
    } else {
        console.log('Computer win');
        computerScore++
    }
    console.log(` Player Score : ${playerScore} Computer Score : ${computerScore}`);
  }

rl.setPrompt("Choisissez pierre, feuille ou ciseaux ('exit' pour quitter) > ");
rl.prompt();

rl.on("line", (input) => {
  if (input.toLowerCase() === "exit") {
    rl.close();
  } else if (game.includes(input)){
    playGame(input);
    rl.prompt();
  } else {
    console.log('choix invalide. Réessayez');
    rl.prompt();
  }
  if (computerScore == 3) {
    console.log('Vous avez perdu la partie');
    rl.close();
  } else if (playerScore == 3) {
    console.log('Vous avez gagné la partie');
  }
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});