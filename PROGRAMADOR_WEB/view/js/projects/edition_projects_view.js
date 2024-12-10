import { activateValidateUser, activateEditionMode, uploadImage } from "./../../../controller/projects/edition_projects_controller.js";
import { rescueInputinformations } from "./../../../controller/projects/edition_projects_controller.js";

const body = document.querySelector('body');
let validateUser = false;
let inputsViewer = false;

export function createButtonActivate() {
    const btn = document.createElement('button');
    btn.id = 'login';
    btn.textContent = 'VC É O BRYAM?';
    btn.addEventListener('click', () => { activateValidateUser() });

    body.appendChild(btn);
}

export function createValidateUser() {
    const section = document.createElement('section');
    section.id = 'validation_section';

    const div = document.createElement('div');
    div.id = 'backgroud_validation';

    const h1 = document.createElement('h1');
    h1.textContent = 'PROVE...';

    const input = document.createElement('input');
    input.id = 'input_password';
    input.placeholder = 'Qual a senha?'

    const btnConfirm = document.createElement('button');
    btnConfirm.id = 'btn_confirm_password';
    btnConfirm.textContent = 'DESCOBRIR';
    btnConfirm.addEventListener('click', () => {
        activateEditionMode(input);
    });

    const btnCancel = document.createElement('button');
    btnCancel.id = 'btn_cancel_password';
    btnCancel.addEventListener('click', () => {
        switchValidateUser();
    });

    const iBtnCancel = document.createElement('i');
    iBtnCancel.className = 'fa-solid fa-x';

    div.appendChild(h1);
    div.appendChild(input);
    div.appendChild(btnConfirm);

    btnCancel.appendChild(iBtnCancel);

    div.appendChild(btnCancel);

    section.appendChild(div);
    body.appendChild(section);
}

export function switchValidateUser() {
    const sectionValidate = document.getElementById('validation_section');

    if (validateUser) {
        sectionValidate.style.left = '-150vw';
    } else {
        sectionValidate.style.left = '0';
    }

    validateUser = !validateUser;
}

export function createInputsCard() {
    const section = document.createElement('section');
    section.id = 'inputs_section';

    const formContainer = document.createElement('div');
    formContainer.id = 'form_container';

    const title = document.createElement('h2');
    title.textContent = 'Cadastro de Cartão';

    const form = document.createElement('form');
    form.id = 'cardForm';

    form.appendChild(createFormGroup('Título', 'text', 'title', 'Nome do Projeto'));
    form.appendChild(createUploadButton());
    form.appendChild(createFormGroup('Linguagens', 'text', 'languages', 'Desenvolveu com quais trecnologias'));
    form.appendChild(createFormGroup('Descrição', 'textarea', 'description', 'O o projeto faz?'));

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'form_group';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Cadastrar Cartão';

    buttonGroup.appendChild(submitButton);
    form.appendChild(buttonGroup);

    const btnCancel = document.createElement('button');
    btnCancel.id = 'btn_cancel_inputs';
    btnCancel.addEventListener('click', () => {
        switchInputs(()=>{console.log('teste do btn cacelar')});
    });

    const iBtnCancel = document.createElement('i');
    iBtnCancel.className = 'fa-solid fa-x';

    btnCancel.appendChild(iBtnCancel);
    formContainer.appendChild(btnCancel);

    formContainer.appendChild(title);
    formContainer.appendChild(form);

    section.appendChild(formContainer);

    body.appendChild(section);
}

function createFormGroup(labelText, inputType, inputId, placeholder, required = true) {
    const formGroup = document.createElement('div');
    formGroup.className = 'form_group';

    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.textContent = labelText;

    let input;
    if (inputType === 'textarea') {
        input = document.createElement('textarea');
        input.rows = '4';
    } else {
        input = document.createElement('input');
        input.type = inputType;
    }

    input.id = inputId;
    input.name = inputId;

    if (placeholder) input.placeholder = placeholder;
    if (required) input.required = true;

    if (inputType === 'file') {
        input.accept = 'image/*';
    }

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    return formGroup;
}

function createUploadButton() {
    const container = document.createElement('div');
    container.id = 'upload_image_input';

    const label = document.createElement('label');
    label.textContent = 'Upload da Imagem'

    const button = document.createElement('button');
    button.id = 'uploadButton';

    const i = document.createElement('i');
    i.className = 'fa-solid fa-arrow-up-from-bracket';

    button.appendChild(i);

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.id = 'fileInput';

    button.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        uploadImage(button);
    });

    container.appendChild(label);
    container.appendChild(button);
    container.appendChild(fileInput);

    return container;
}

export function switchInputs(onSave) {
    const sectionInputs = document.getElementById('inputs_section');

    if (inputsViewer) {
        sectionInputs.style.left = '-150vw';
    } else {
        sectionInputs.style.left = '0';
        const form = document.getElementById('cardForm');

        form.addEventListener('submit', () => {
            rescueInputinformations(onSave);
        });
    }

    inputsViewer = !inputsViewer;
}