import { projects } from './../../../model/projects_model.js'

export function createProjectsCardsNav(projectsNav) {
    let titleNav = document.createElement('h1');
    titleNav.textContent = 'PROJETOS DESENVOLVIDOS PPOR MIM';

    let projectsCardsNav = createProjectsCards();
    
    projectsNav.appendChild(titleNav);
    projectsNav.appendChild(projectsCardsNav);
}

function createProjectsCards() {
    let projectNav = document.createElement('div');
    projectNav.id = 'projects_nav';

    projects.map((project, index) => {
        let cardContainer = document.createElement('div');
        cardContainer.className = 'card_container';

        let card = document.createElement('div');
        card.className = 'card';

        let cardFront = document.createElement('div');
        cardFront.className = 'card_front';

        let titleCard = document.createElement('h4');
        titleCard.textContent = project.project;
        let imgCard = document.createElement('img');
        imgCard.src = project.img;
        let languagesCard = document.createElement('h5');
        languagesCard.textContent = project.languages;

        cardFront.appendChild(titleCard);
        cardFront.appendChild(imgCard);
        cardFront.appendChild(languagesCard);

        let cardBack = document.createElement('div');
        cardBack.className = 'card_back';

        let descriptionCard = document.createElement('p');
        descriptionCard.textContent = project.description;
        let buttonsDivCard = document.createElement('div');/*Trocar por uma função que cria esses botoes */

        cardBack.appendChild(descriptionCard);
        cardBack.appendChild(buttonsDivCard);

        card.appendChild(cardFront);
        card.appendChild(cardBack);
        cardContainer.appendChild(card);

        projectNav.appendChild(cardContainer);
    });

    return projectNav;
}