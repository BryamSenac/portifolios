import { switchBanner, startBanners } from "./banner_controller.js";

window.switchBanner = switchBanner;

document.addEventListener("DOMContentLoaded", ()=>{
    startBanners();
});