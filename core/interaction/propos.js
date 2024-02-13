"use strict";

const sectionContainer = document.getElementById('main');
const sectionElement = document.createElement('div');
sectionElement.className = `section propos`;
sectionElement.id = `propos`;
sectionElement.innerHTML = `<h2>A Propos de moi</h2><div class="about_card"><p>Je suis Titi Pharell, étudiant à Issy les moulineaux, 
France. Je suis un passionné de programmation informatique et Je programme depuis 2019. J'ai appris <b>PYTHON</b> le SQL le HTML 
le CSS et le <b>Javascript</b>, lors de mon cursus scolaire et le <b>Java</b> et le React en autodidacte.</p>
<a href="../assets/cv.pdf" download class="btn">Télécharge mon CV</a></div>`;
sectionContainer.appendChild(sectionElement);