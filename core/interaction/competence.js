"use strict";

const sectionContainer = document.getElementById('main');
const sectionElement = document.createElement('div');
sectionElement.className = `section competence`;
sectionElement.id = `competence`;
sectionElement.innerHTML = `<h2>Competence</h2><div class="about_card card_color"><p>Python - 2019</p></div> 
<div class="about_card card_color"><p>Javascript - 2020</p></div> <div class="about_card card_color"><p>React js - 2020</p></div> 
<div class="about_card card_color"><p>Java- 2022</p></div> <div class="about_card card_color"><p>C - 2023</p></div> 
<div class="about_card card_color"><p>C++ - 2023</p></div>
<div class="about_card card_color"><p>php - 2024</p></div>`;
sectionContainer.appendChild(sectionElement);
