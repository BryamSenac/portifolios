import { switchValidateUser } from "../../view/js/projects/edition_projects_view.js";
import { createEditionsButtons } from "../../view/js/projects/cards_view.js";

let editionModeActivate = false;

export function activateEditionMode(input) {
    if (input.value == '123456789') {
        createEditionsButtons();
        editionModeActivate = true;
        switchValidateUser();
    } else {
        alert('Não, você não é o BRYAM...')
    }
}

export function activateValidateUser() {
    if (!editionModeActivate) {
        switchValidateUser();
    } else {
        alert('Modo de edição já ativo!');
    }
}

export function rescueInputinformations(onSave) {
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').files[0];
    const languages = document.getElementById('languages').value;
    const description = document.getElementById('description').value;

    console.log({
        title,
        image: image ? image.name : 'Nenhuma imagem selecionada',
        languages,
        description,
    });

    alert('Cartão cadastrado com sucesso!');
}

export function uploadImage(button){
    const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                button.style.backgroundImage = `url(${e.target.result})`;
                button.style.color = 'transparent';
            };
            reader.readAsDataURL(file); 
        }
}