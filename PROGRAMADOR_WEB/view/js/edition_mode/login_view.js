import { validateUser } from "../../../controller/edition_mode/edition_mode_controller.js";

export function createLoginScreen(body){
    let loginSection = document.createElement('section');
    loginSection.id = 'login_section';

    let loginDiv = document.createElement('div');
    loginDiv.id = 'login_container';

    let btnCancel = document.createElement('i');
    btnCancel.id = 'btn_cancel_login';
    btnCancel.className = 'fa-solid fa-xmark';
    btnCancel.addEventListener('click', () =>{
        hidenLoginScreen();
    });

    loginDiv.appendChild(btnCancel);

    let form = createLoginForm();
    loginDiv.appendChild(form);

    loginSection.appendChild(loginDiv);
    body.appendChild(loginSection);

    showLoginScreen();
}

export function showLoginScreen(){
    let loginSection = document.getElementById('login_section');
    loginSection.style.left = '0';
}

function hidenLoginScreen(){
    let loginSection = document.getElementById('login_section');
    loginSection.style.left = '-100vw';
}

function createLoginForm(){
    let form = document.createElement('div');
    form.id = 'form';

    let labelPasswordFild = document.createElement('h2');
    labelPasswordFild.textContent = 'Prove que vocÊ é o BRYAM...';

    let inputPasswordFild = document.createElement('input');
    inputPasswordFild.placeholder = 'Digite a senha aqui...';

    let btnPassordConfirm = document.createElement('button');
    btnPassordConfirm.textContent = 'VERIFICAR';
    btnPassordConfirm.addEventListener('click', ()=>{
        validateUser(inputPasswordFild);
        hidenLoginScreen();
    });

    form.appendChild(labelPasswordFild);
    form.appendChild(inputPasswordFild);
    form.appendChild(btnPassordConfirm);

    return form;
}