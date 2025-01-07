import { createHeader } from "../../view/js/header_view.js";
import { createFooter } from "../../view/js/footer_view.js";

document.addEventListener('DOMContentLoaded', ()=>{
    const header = document.getElementsByTagName('header')[0];
    const footer = document.getElementsByTagName('footer')[0];

    createHeader(header);
    createFooter(footer);
});