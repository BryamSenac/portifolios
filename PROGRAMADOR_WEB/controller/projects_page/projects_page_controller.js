import { createHeader } from "../../view/js/header_view.js";
import { createFooter } from "../../view/js/footer_view.js";
import { createBannersNav } from "../../view/js/projects_page/banner_view.js";
import { switchBanner, nextBanner } from "./banner_controller.js";
import { createProjectsCardsNav } from "../../view/js/projects_page/projects_cards_view.js";
import { createAlert } from "../../view/js/alert_dialog/alerts_view.js";

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementsByTagName('header')[0];
    const footer = document.getElementsByTagName('footer')[0];
    const body = document.getElementsByTagName('body')[0];

    const banners = document.getElementById('banners');
    const projects_cards = document.getElementById('projects_cards');

    createHeader(header);
    createFooter(footer);
    createAlert(body);

    createBannersNav(banners);
    switchBanner(0);

    createProjectsCardsNav(projects_cards);

    setInterval(nextBanner, 3000);
});