import { switchBanner, startBanners } from "./banner_controller.js";
import { startCards } from "./cards_controller.js";
import { createHeader } from "../../view/js/header_view.js";
import { createFooter } from "../../view/js/footer_view.js";
import { activateEditionMode } from "./edition_projects_controller.js";
import { createButtonActivate, createValidateUser } from "../../view/js/projects/edition_projects_view.js";

window.switchBanner = switchBanner;
window.activateEditionMode = activateEditionMode;

document.addEventListener("DOMContentLoaded", ()=>{
    const header = document.querySelector('header');
    createHeader(header);

    const footer = document.querySelector('footer');
    createFooter(footer);
    
    startBanners();
    startCards();

    createButtonActivate();
    createValidateUser();
});