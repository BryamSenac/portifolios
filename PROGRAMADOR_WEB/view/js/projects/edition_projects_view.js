import { activateValidateUser, activateEditionMode } from "./../../../controller/projects/edition_projects_controller.js";

const body = document.querySelector('body');
let validateUser = false;

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

