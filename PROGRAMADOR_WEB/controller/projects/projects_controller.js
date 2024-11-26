import { switchBanner, startBanners } from "./banner_controller.js";
import { startCards } from "./cards_controller.js";

window.switchBanner = switchBanner;

document.addEventListener("DOMContentLoaded", ()=>{
    startBanners();
    startCards();
});