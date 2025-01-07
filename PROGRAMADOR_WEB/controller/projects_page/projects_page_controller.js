import { createHeader } from "../../view/js/header_view.js";
import { createFooter } from "../../view/js/footer_view.js";
import { createBannersNav } from "../../view/js/projects_page/banner_view.js";
import { switchBanner, nextBanner } from "./banner_controller.js";

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementsByTagName('header')[0];
    const footer = document.getElementsByTagName('footer')[0];

    const banners = document.getElementById('banners');

    createHeader(header);
    createFooter(footer);
    createBannersNav(banners);
    switchBanner(0);

    setInterval(nextBanner, 3000);
});