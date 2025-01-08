import { validatePasswordUser } from "../../services/edition_mode_services.js";
import { showAlert } from "../../view/js/alert_dialog/alerts_view.js";
import { createEditionPrjectsButtons, createFormProjectSection } from "../../view/js/edition_mode/edition_projects_view.js";
import { createLoginScreen, showLoginScreen } from "../../view/js/edition_mode/login_view.js";

let editionModeActivade = false;
let userValid = false;
let body;

export function activateEditionMode(bodySection) {
    body = bodySection;
    if (!userValid) {
        if (editionModeActivade) {
            showLoginScreen();
        } else {
            createLoginScreen(body);
            editionModeActivade = true;
        }
    }
}

export function validateUser(input) {
    userValid = validatePasswordUser(input.value);
    if (userValid) {
        showAlert('Modo de Edição Ativado..');
        createFormProjectSection();
        createEditionPrjectsButtons();
    } else {
        showAlert('Você não é o Bryam...');
    }
}