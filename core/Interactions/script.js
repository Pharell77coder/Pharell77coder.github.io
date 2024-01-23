"use strict";

//10 variables
//2 Classes et 2 Function
//2 Message sur console
const navData = [
    { title: 'Accueil'},
    { title: 'Competence'},
    { title: 'Portfolio'},
    { title: 'About'},
    { title: 'Contact'}
  ];

// Code de l'entete
let headerElement = `
    <h1>Portfolio</h1><div class="profile">
    <span class="fas fa-search"></span>
    <img class="profile-image-header" alt="miskine sa ne marche pas" src="../assets/profil.jpg">
    <p class="profile-name-header">Lorem ipsum</p></div>
    `;
const headerContainer = document.getElementById('header').innerHTML = headerElement;

//Barre de navigation sur le cote en javascript
const navContainer = document.getElementById('nav');
const navElement = document.createElement('ul');
navData.forEach(ligne => {
    navElement.className = 'nav';
    navElement.innerHTML += `
      <a href="#${ligne.title}"><li>${ligne.title}</li></a>
    `;
    navContainer.appendChild(navElement);
});

//Creation des sections
const sectionContainer = document.getElementById('main');
navData.forEach(ligne => {
const sectionElement = document.createElement('div');
    sectionElement.className = `section ${ligne.title}`;
    sectionElement.id = `${ligne.title}`;
    sectionElement.innerHTML = `
    <h2>${ligne.title}</h2>
    `;
    sectionContainer.appendChild(sectionElement);
});

// Code de l'entete
let accueilElement = `<h2>TITI Pharell</h2> <h3>Etudiant</h3>`;
const accueilContainer = document.getElementById('Accueil').innerHTML = accueilElement;

// Code Contacte
let contactElement = `
    <h2>Contactez-Moi</h2>
    <form action="/action_page.php" novalidate>
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email" required><br><br>
    <input type="submit" value="Submit"></form>`;
const contactContainer = document.getElementById('Contact').innerHTML = contactElement;

// Code du pied de la page
let footerElement = `
    <p>avis de confidentialité du site Web</p> 
    <p>cookies</p> 
    <p>légal</p> 
    <p>lignes directrices pour la participation communautaire</p>
    `;
const footerContainer = document.getElementById('footer').innerHTML = footerElement;

alert("Bonjour");
console.log("bonjour");
console.log("Au revoir");