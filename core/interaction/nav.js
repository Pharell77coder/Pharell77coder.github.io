"use strict";

const navData = [
    { title: 'accueil'},
    { title: 'competence'},
    { title: 'portfolio'},
    { title: 'propos'},
    { title: 'parcours'},
    { title: 'contact'},
    { title: 'youtube'}
];

const navContainer = document.getElementById('nav');
const navElement = document.createElement('ul');
navData.forEach(ligne => {
    navElement.className = 'nav';
    navElement.innerHTML += `
      <li><a href="../fr/${ligne.title}.html">${ligne.title[0].toUpperCase()+ligne.title.slice(1)}</a></li>
    `;
    navContainer.appendChild(navElement);
});