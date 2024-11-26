import { switchBanner, startBanners } from "./banner_controller.js";
import { startCards } from "./cards_controller.js";
import { createHeader } from "../../view/js/header_view.js";
import { createFooter } from "../../view/js/footer_view.js";

window.switchBanner = switchBanner;

document.addEventListener("DOMContentLoaded", ()=>{
    const header = document.querySelector('header');
    createHeader(header);
    const footer = document.querySelector('footer');
    createFooter(footer);
    startBanners();
    startCards();
});