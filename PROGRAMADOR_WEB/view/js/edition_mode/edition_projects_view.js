export function createFormProjectSection() {
    let body = document.getElementById('body');
    let formProjectSection = document.createElement('section');
    formProjectSection.id = 'form_project_edit';

    let btnCancel = document.createElement('i');
    btnCancel.id = 'btn_cancel_edition_projects';
    btnCancel.className = 'fa-solid fa-xmark';
    btnCancel.addEventListener('click', () => {
        hidenEditProjectScreen();
    });

    formProjectSection.appendChild(btnCancel);

    let formContainer = createFormEditionProject();

    formProjectSection.appendChild(formContainer);

    body.appendChild(formProjectSection);
}

function createFormEditionProject() {
    let formContainer = document.createElement('form');
    formContainer.id = 'form_container';

    let formTitle = document.createElement('h2');
    formTitle.textContent = 'Edição/Criação dos Projetos';

    formContainer.appendChild(formTitle);
    formContainer.appendChild(createInput('Nome do Projeto', 'project'));
    formContainer.appendChild(createInput('Link da Imagem', 'img'));
    formContainer.appendChild(createInput('Linguagens', 'languages'));
    formContainer.appendChild(createInput('Descrição', 'description', 'text'));
    formContainer.appendChild(createInput('Link do Projeto', 'link'));

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Salvar';

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o comportamento padrão de recarregar a página
        console.log('Informações Atualizadas:');
        alert('Informações do projeto salvas com sucesso!');
    });

    formContainer.appendChild(submitButton);

    return formContainer;
}

function createInput(labelText, id, type = 'text') {
    const fieldContainer = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', id);

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);

    return fieldContainer;
}

export function showEditProjectScreen() {
    let editionProjectSection = document.getElementById('form_project_edit');
    editionProjectSection.style.left = '0';
}

function hidenEditProjectScreen() {
    let editionProjectSection = document.getElementById('form_project_edit');
    editionProjectSection.style.left = '-100vw';
}

export function createEditionPrjectsButtons() {
    let projectNavCards = document.getElementById('projects_nav');
    
    projectNavCards.appendChild(createNewProjectButton());

    let divEdit = document.getElementsByClassName('edition_butttons_div');
    let divEditionButtons = Array.from(divEdit);
    createEditionButton(divEditionButtons);
    createDeleteButton(divEditionButtons);
}

function createNewProjectButton() {
    let cardContainer = document.createElement('div');
    cardContainer.id = 'new_project_button';
    cardContainer.className = 'card_container';

    cardContainer.addEventListener('click', () => {

    });

    let card = document.createElement('div');
    card.className = 'card';

    let cardFront = document.createElement('div');
    cardFront.className = 'card_front';

    let cardBack = document.createElement('div');
    cardBack.className = 'card_back';

    let addIconFront = document.createElement('i');
    addIconFront.id = 'add_icon_card';
    addIconFront.className = 'fa-solid fa-plus';

    let addIconBack = document.createElement('i');
    addIconBack.id = 'add_icon_card';
    addIconBack.className = 'fa-solid fa-plus';

    cardBack.appendChild(addIconBack);
    cardFront.appendChild(addIconFront);

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardContainer.appendChild(card);

    return cardContainer;
}

function createEditionButton(divEditionButtons) {
    divEditionButtons.map((divEditionButton, index) => {
        let editDivButton = document.createElement('div');
        editDivButton.className = 'edition_button';

        let iconEditButton = document.createElement('i');
        iconEditButton.className = 'fa-solid fa-pen-to-square';

        editDivButton.appendChild(iconEditButton)
        divEditionButton.appendChild(editDivButton);
    });
}

function createDeleteButton(divEditionButtons) {
    divEditionButtons.map((divEditionButton, index) => {
        let delDivButton = document.createElement('div');
        delDivButton.className = 'delete_button';

        let iconDelButton = document.createElement('i');
        iconDelButton.className = 'fa-solid fa-trash';


        delDivButton.appendChild(iconDelButton)
        divEditionButton.appendChild(delDivButton);
    });
}