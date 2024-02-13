"use strict";

const sectionContainer = document.getElementById('main');
const sectionElement = document.createElement('div');
sectionElement.className = `section contact`;
sectionElement.id = `contact`;
sectionElement.innerHTML =  `<h2>Contactez-moi</h2><form action="#" novalidate><div class="form"><label for="email" class="label"> Email </label>
<input type="email" name="email" placeholder="Entrer votre Email" class="input" /></div><div class="form">
<label for="subject" class="label"> Objet </label><input type="text" name="subject" placeholder="Entrer votre objet" class="input" />
</div><div class="form"><label for="message" class="label"> Message </label>
<input name="message" placeholder="Entrer votre message" class="input message"/></div><button class="button">Envoyer</button></form>`;
sectionContainer.appendChild(sectionElement);