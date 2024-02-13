"use strict";

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

const resumeContainer = document.getElementById('main');
resumeContainer.appendChild(resumeTable);