"use strict";

const navData = [
    { title: 'Accueil'},
    { title: 'Competence'},
    { title: 'Portfolio'},
    { title: 'Propos'},
    { title: 'Parcours'},
    { title: 'Contact'}
];

function create_section(element, name_id, ecrase = false) {
    let Element = element; 
    if (ecrase == true){
        const Reset = document.getElementById(name_id).innerHTML = "";
    }
    const Container = document.getElementById(name_id).innerHTML += Element;
};

//RESET
create_section(``, 'header', true);
create_section(``, 'nav', true);
create_section(``, 'main', true);
create_section(``, 'footer', true);

// Code de l'entete
create_section(`<h1>Portfolio</h1>
<div class="profile">
    <span class="fas fa-search"></span>
    <img class="profile-image-header" alt="fonctionnne pas" src="../assets/profil.jpg">
</div>`, 'header', true);

//Barre de navigation sur le cote en javascript
const navContainer = document.getElementById('nav');
const navElement = document.createElement('ul');
navData.forEach(ligne => {
    navElement.className = 'nav';
    navElement.innerHTML += `
      <li><a href="#${ligne.title}">${ligne.title}</a></li>
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
create_section(`<h2>TITI Pharell</h2>
<h3>Etudiant</h3>`, 'Accueil', true);

// Code competence
create_section( `<div class="about_card card_color"><p>Python - 2019</p></div>
<div class="about_card card_color"><p>Javascript - 2020</p></div>
<div class="about_card card_color"><p>React js - 2020</p></div>
<div class="about_card card_color"><p>Java- 2022</p></div>
<div class="about_card card_color"><p>C - 2023</p></div>
<div class="about_card card_color"><p>C++ - 2023</p></div>`, 'Competence');

// Code portfolio
create_section( `
<div class="filters">
  <span class="item">Tous</span>
  <span class="item">C</span>
  <span class="item">C++</span>
  <span class="item">Javascript</span>
</div>
<div id="grid_portfolio" class="grid_portfolio"></div>`, 'Portfolio');

const projets = [
    {title: "Role player games", category: "C", link: "https://github.com/Pharell77coder/TestProject", img: "../assets/rpg.png"},
    {title: "Shifumi", category: "C++", link: "https://github.com/Pharell77coder/projet-c-", img: "../assets/shifumi.jpg"},
    {title: "Protfolio", category: "Javascript", link: "https://github.com/Pharell77coder/projet_web", img: "../assets/code.png"}
];

const portfolioContainer = document.getElementById('grid_portfolio');

projets.map(ligne => {
    const cardElement = document.createElement('div');
    cardElement.className = `portfolio_card`;
    cardElement.innerHTML = `<span>${ligne.category}</span>
            <h4>${ligne.title}</h4>
            <img src=${ligne.img} alt = "fonctionne pas" />
            <a href=${ligne.link} class="button">
            <p>Click</p>
            </a>`;
    portfolioContainer.appendChild(cardElement);
});


// Code Contact
create_section( `<h2>Contactez-Moi</h2>
<form action="/action_page.php" novalidate>
<label for="email">Enter your email:</label>
<input type="email" id="email" name="email" required><br><br>
<input type="submit" value="Submit"></form>`, 'Contact', true);

// Code de About
create_section( `<div class="about_card">
<p>Je suis Titi Pharell, étudiant à Issy les moulineaux, France. Je suis un passionné de programmation informatique et Je programme depuis 2019. J'ai appris <b>PYTHON</b> le SQL le HTML le CSS et le <b>Javascript</b>, lors de mon cursus scolaire et le <b>Java</b> et le React en autodidacte.</p>
<a href="https://drive.google.com/drive/folders/1riNt38K3F1Ufj-ov-od3xBmWPYXz2PUE?usp=share_link" class="btn">Télécharge mon CV</a>
</div>`, 'Propos');

// Code du pied de la page
create_section( `<p>avis de confidentialité du site Web</p><p>cookies</p><p>légal</p> 
<p>lignes directrices pour la participation communautaire</p>`, 'footer', true);

const resumeData = [
    
    {category:"education",
    year: "2023 - maintenant",
    title:"BTS SIO Option SLAM",
    desc:"H3 Hitema - Issy les moulineaux"},
        
    {category:"experience",
    year: "2023 - 2023",
    title:"Equipier polyvalent",
    desc:"Mac Donalds - Champs -sur - marne"},

    {category:"education",
    year: "2022 - 2023",
    title:"Licence Histoire",
    desc:"Université Paris Est Créteil - Créteil"},
    
    {category:"education",
    year: "2021 - 2022",
    title:"Double licence Mathématiques et informatiques ",
    desc:"Université Gustave eiffel  - Champs-sur-marne"},
    
    {category:"education",
    year: "2018 - 2021",
    title:"Bacalauréat Mathématiques et Numériques et sciences de l’informatiques",
    desc:"Lycée René Descartes - Champs-sur-marne"},
    
    {category:"education",
    year: "2014 - 2018",
    title:"Diplome nationale du Brevet",
    desc:"Collège Jean Wiener - Champs-sur-marne "},
    
    {category:"experience",
    year: "2018 - 2018",
    title:"Stagiaire en restauration",
    desc:"Tablapizza - Noisiel"}
];

let resumeTable = document.createElement('table');
let resumeHeader = document.createElement('tr');
let resumeHeaderCells = ['Type', 'Date', 'Nom', "Lieu"];
resumeHeaderCells.forEach(cellText => {
    const cell = document.createElement('th');
    cell.textContent = cellText;
    resumeHeader.appendChild(cell);
  });
resumeTable.appendChild(resumeHeader);

resumeData.forEach((ligne) => {

const resumeRow = document.createElement('tr');
const resumeRowCells = [ ligne.category, ligne.year, ligne.title, ligne.desc];
resumeRowCells.forEach(cellText => {
    const cell = document.createElement('td');
    cell.textContent = cellText;
    resumeRow.appendChild(cell);
    });
    resumeTable.appendChild(resumeRow);
});

const resumeContainer = document.getElementById('Parcours');
resumeContainer.appendChild(resumeTable);