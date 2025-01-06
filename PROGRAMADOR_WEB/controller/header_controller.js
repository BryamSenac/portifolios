import { closeMenuHeader, openMenuHeader } from "../view/js/header_view.js";

export function navigationHeader(link) {
    window.open(link, '_blank');
}

let menuOpen = true;
export function switchMenuHeader() {
    let rightHeader = document.getElementById('right_header');
    let part0 = document.getElementById('part_0_menu_header');
    let part1 = document.getElementById('part_1_menu_header');
    let part2 = document.getElementById('part_2_menu_header');

    if (menuOpen) {
        rightHeader.style.right = '-50vw';
        openMenuHeader(part0, part1, part2);
    } else {
        rightHeader.style.right = '0vw';
        closeMenuHeader(part0, part1, part2);
    }

    menuOpen = !menuOpen;
}