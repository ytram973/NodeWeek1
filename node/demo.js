// const os = require('os');

// const {username} = os.userInfo();

// const cpus = os.cpus().length;

// console.log(`Hello ${username}  et a ${cpus} cpus!`);

// process.stdout.write('Hello World!Saisissez votre nom: ');

// process.stderr.write('Hello Error!');

// process.stdin.on('data', (chunk) => {
// process.exit(0);
// });


const readline = require('readline');
const minNumber = 1;
const maxNumber = 100;
const maxAttempts = 10;

const random = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;
let WonGame = false;

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

const ask = () => {
rl.question(`Quel est le nombre ? `, (input) => {
    const guessedNumber = parseInt(input.trim(), 10);
    if(isNaN(guessedNumber)) {
        console.log('Vous devez saisir un nombre');
    } else{
        attempts++;
    }
    if(guessedNumber === random) {
        console.log(`Bravo, vous avez trouvé le nombre mystère en ${attempts} essais`);
        WonGame = true;
    } else if (attempts >= maxAttempts) {
        console.log(`Vous avez perdu, le nombre mystère était ${random}`);
    } else if (guessedNumber < random) {
        console.log('Le nombre mystère est plus grand');
    }else {
        console.log('Le nombre mystère est plus petit');
    }
    if(!WonGame || attempts >= maxAttempts) {
     rl.close();   
    }else {
        console.log('Il vous reste ${maxAttempts - attempts} essais');
        ask();
    }
});
};

console.log('Bienvenue dans le jeu du nombre mystère');
console.log(`Vous devez trouver un nombre entre ${minNumber} et ${maxNumber}`);
console.log(`Vous avez ${maxAttempts} essais`);
ask();
