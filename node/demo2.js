const fs = require('fs');

try {
  // 1. Récupérer les données et les stocker dans un tableau d'objets
  const data = fs.readFileSync('students.txt', 'utf-8');
  const lines = data.split('\n').filter(Boolean);
  const students = lines.map((line) => {
    const [name, address, grade] = line.split(' ');
    return { name, address, grade: parseInt(grade) };
  });

  // 2. Recherche des étudiants qui ont eu plus de 17 de moyenne
  const topStudents = students.filter((student) => student.grade > 17);
  console.log('Les meilleurs étudiants :', topStudents);

  // 3. Recherche de l'étudiant qui a eu la meilleure note
  const bestStudent = students.reduce((acc, cur) => (cur.grade > acc.grade ? cur : acc), { grade: -1 });
  console.log('Le meilleur étudiant :', bestStudent);

  // 4. Ajout des étudiants dans un tableau
  const newStudents = [
    { name: 'Sonia', address: 'Paris', grade: 18 },
    { name: 'Clarisse', address: 'Marseille', grade: 17 },
  ];
  const allStudents = [...students, ...newStudents];

  // 5. Ordonner les étudiants par note décroissante
  allStudents.sort((a, b) => b.grade - a.grade);

  // 6. Ajouter les nouveaux étudiants dans le fichier
  const newLines = newStudents.map((student) => `${student.name} ${student.address} ${student.grade}\n`);
  fs.appendFileSync('students.txt', newLines.join(''));

  // 7. Lire le fichier et mettre chaque nom en majuscule
  const fileData = fs.readFileSync('students.txt', 'utf-8');
  const upperCaseNames = fileData.split('\n').filter(Boolean).map((line) => {
    const [name, address, grade] = line.split(' ');
    return { name: name.toUpperCase(), address, grade: parseInt(grade) };
  });
  console.log('Noms en majuscule :', upperCaseNames);
} catch (err) {
  console.error(err);
}
