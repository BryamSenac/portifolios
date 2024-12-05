import { createValidateUser, switchValidateUser } from "../../view/js/projects/edition_projects_view.js";
import { createEditionsButtons } from "../../view/js/projects/cards_view.js";

let editionModeActivate = false;

export function activateEditionMode(input){
    if(input.value == '123456789'){
        createEditionsButtons();
        editionModeActivate = true;
        switchValidateUser();
    }else{
        alert('Não, você não é o BRYAM...')
    }
}

export function activateValidateUser(){
    if(!editionModeActivate){
        switchValidateUser();
    }else{
        alert('Modo de edição já ativo!');
    }
}