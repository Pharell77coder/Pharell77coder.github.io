
const sectionContainer = document.getElementById('main');
const sectionElement = document.createElement('div');
sectionElement.className = `section youtube`;
sectionElement.id = `youtube`;
sectionElement.innerHTML = ` <iframe width="320" height="240" src="https://www.youtube.com/embed/LOlHrMgAIcU?si=9wCwfQjYFbYttDCb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<video width="320" height="240" controls><source src="../assets/video.mp4" type="video/mp4">votre navigateur ne supporte pas le tag de la video.</video>`;
sectionContainer.appendChild(sectionElement);