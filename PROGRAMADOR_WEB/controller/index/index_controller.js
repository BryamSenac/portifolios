import { switchMenu } from "../menu_controller.js";
import { createHeader } from "../../view/js/header_view.js";
import { createFooter } from "../../view/js/footer_view.js";

window.switchMenu = switchMenu;

document.addEventListener('DOMContentLoaded', ()=>{
    const header = document.querySelector('header');
    createHeader(header);
    const footer = document.querySelector('footer');
    createFooter(footer);
});