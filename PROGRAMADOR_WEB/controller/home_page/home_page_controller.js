import { createHeader } from "../../view/js/header_view.js";

document.addEventListener('DOMContentLoaded', ()=>{
    const header = document.getElementsByTagName('header')[0];
    createHeader(header);
});