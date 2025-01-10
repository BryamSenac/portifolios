import { pages } from "../../model/pages_model.js";
import { switchMenuHeader, navigationHeader } from "../../controller/header_controller.js";

export function createHeader(header) {
    let leftHeader = createLeftHeader();
    let rightHeader = createRightHeader();
    let menuHeader = createMenuHeader();

    header.appendChild(leftHeader);
    header.appendChild(rightHeader);
    header.appendChild(menuHeader);
}

function createLeftHeader() {
    let leftHeader = document.createElement('div');
    leftHeader.id = 'left_header';

    let logo = document.createElement('img');
    logo.id = 'logo_header';
    logo.alt = 'Logo'
    logo.src = './../../assets/img/logo.svg';

    let profession = document.createElement('h3');
    profession.id = 'profession_header';
    profession.textContent = 'Professor de Computação';

    leftHeader.appendChild(logo);
    leftHeader.appendChild(profession);

    return leftHeader;
}

function createRightHeader() {
    let rightHeader = document.createElement('div');
    rightHeader.id = 'right_header';

    pages.map((page, index) => {
        let btn = document.createElement('button');
        btn.className = 'btn_header';
        btn.id = `btn_header_${page.name}`;
        btn.addEventListener('click', () => {
            navigationHeader(page.link);
        });

        let btnText = document.createElement('h3');
        btnText.textContent = page.text.toUpperCase();

        let btnIcon = document.createElement('i');
        btnIcon.className = page.icon;

        btn.appendChild(btnIcon);
        btn.appendChild(btnText);

        rightHeader.appendChild(btn);
    });

    return rightHeader;
}

function createMenuHeader() {
    let menuHeader = document.createElement('div');
    menuHeader.id = 'menu_header';

    for (let i = 0; i < 3; i++) {
        let partMenu = document.createElement('div');
        partMenu.classList.add('part_menu_header', 'open');
        partMenu.id = `part_${i}_menu_header`;
        menuHeader.appendChild(partMenu);
    }

    menuHeader.addEventListener('click', ()=>{switchMenuHeader()});

    return menuHeader;
}

export function openMenuHeader(part0, part1, part2){
    part0.style.margin = '0.5vw';
    part1.style.margin = '0.5vw';
    part2.style.margin = '0.5vw';

    part0.style.position = 'relative';
    part1.style.position = 'relative';
    part2.style.position = 'relative';

    part0.style.rotate = '0deg';
    part2.style.rotate = '0deg';

    part1.style.width = '6vh';
}

export function closeMenuHeader(part0, part1, part2){
    part0.style.margin = '0vw';
    part1.style.margin = '0vw';
    part2.style.margin = '0vw';

    part0.style.position = 'absolute';
    part1.style.position = 'absolute';
    part2.style.position = 'absolute';

    part0.style.rotate = '45deg';
    part2.style.rotate = '-45deg';

    part1.style.width = '0';
}