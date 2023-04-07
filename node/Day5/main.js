const pug = require('pug');

const menuItems = [
  { path: '/', title: 'Home', isActive: true },
  { path: '/about-me', title: 'About', isActive: false },
  { path: '/references', title: 'References', isActive: false },
  { path: '/contact-me', title: 'Contact', isActive: false },
];


let compile = pug.compileFile('layout.pug', {pretty: true})
console.log(compile({ menuItems }));