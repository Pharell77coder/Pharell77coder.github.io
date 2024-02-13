"use strict";

const sectionContainer = document.getElementById('main');
const sectionElement = document.createElement('div');
sectionElement.className = `section portfolio`;
sectionElement.id = `portfolio`;
sectionElement.innerHTML = `<h2>Portfolio</h2><div class="filters"><span class="item">Tous</span>
<span class="item">C</span><span class="item">C++</span>
<span class="item">Javascript</span></div><div id="grid_portfolio" class="grid_portfolio"></div>`;
sectionContainer.appendChild(sectionElement);

const projets = [
    {title: "Role player games", category: "C", link: "https://github.com/Pharell77coder/TestProject", 
    img: "../assets/rpg.png", alternative: "une image un rpg"},
    {title: "Shifumi", category: "C++", link: "https://github.com/Pharell77coder/projet-c-", 
    img: "../assets/shifumi.jpg", alternative: "une image d'un shifumi"},
    {title: "Portfolio", category: "Javascript", link: "https://github.com/Pharell77coder/projet_web", 
    img: "../assets/code.png", alternative: "une icone de code"}
];

const portfolioContainer = document.getElementById('grid_portfolio');

projets.map(ligne => {
    const cardElement = document.createElement('div');
    cardElement.className = `portfolio_card`;
    cardElement.innerHTML = `<span>${ligne.category}</span>
            <h4>${ligne.title}</h4>
            <img src=${ligne.img} alt = ${ligne.alternative} />
            <a href=${ligne.link} class="button">
            <p>Clique</p>
            </a>`;
    portfolioContainer.appendChild(cardElement);
});

