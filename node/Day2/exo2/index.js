require('dotenv').config(); 

const seuilAssezBien = parseInt(process.env.SEUIL_ASSEZ_BIEN) || 12;
const seuilBien = parseInt(process.env.SEUIL_BIEN) || 14;
const seuilTresBien = parseInt(process.env.SEUIL_TRES_BIEN) || 16;

function determinerMention(note) {
  const noteNumber = parseInt(note); 

  if (noteNumber >= seuilTresBien) {
    return 'Très bien';
  } else if (noteNumber >= seuilBien) {
    return 'Bien';
  } else if (noteNumber >= seuilAssezBien) {
    return 'Assez bien';
  } else {
    return 'Passable';
  }
}

const students = [
  { name: 'ALAN', note: '11', address: 'Paris', mention : null },
  { name: 'ALICE', note: '17', address: 'Paris', mention : null },
  { name: 'SOHPHIE', note: '20', address: 'Paris', mention : null },
  { name: 'SONIA', note: '17', address: 'Toulon', mention : null },
  { name: 'ANTOINE', note: '18', address: 'Aubenas', mention : null },
  { name: 'BERNARD', note: '19', address: 'Paris', mention : null },
  { name: 'ALAN', note: '14', address: 'Aubenas', mention : null },
  { name: 'SONIA', note: '18', address: 'Paris', mention : null },
  { name: 'CLARISSE', note: '17', address: 'Marseille', mention : null }
];

students.forEach(student => {
  student.mention = determinerMention(student.note);
});


if(process.env.APP_ENV === 'production'){
    console.log("Je suis en production");
}else{
    console.log("Je suis en développement");
}

console.log(students);
