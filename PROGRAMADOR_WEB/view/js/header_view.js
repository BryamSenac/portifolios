import { pages } from './../../model/links_model.js';

export function createHeader(header) {

    const logoProfissao = document.createElement('div');
    logoProfissao.id = 'logo_profissao';

    const logo = document.createElement('div');
    logo.id = 'logo';
    logoProfissao.appendChild(logo);

    const proficao = document.createElement('div');
    proficao.id = 'proficao';
    const title = document.createElement('h1');
    title.innerText = 'Professor de Programação';
    proficao.appendChild(title);
    logoProfissao.appendChild(proficao);

    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.className = 'menu_desative';
    menu.setAttribute('onclick', 'switchMenu()');

    const headerBtns = document.createElement('div');
    headerBtns.id = 'header_btns';

    headerBtns.appendChild(createButton('home', pages.home, 'fa-solid fa-house', 'HOME'));
    headerBtns.appendChild(createButton('projects', pages.projects, 'fa-solid fa-rectangle-list', 'PROJETOS'));
    headerBtns.appendChild(createButton('formations', pages.formation, 'fa-solid fa-graduation-cap', 'FORMAÇÃO'));

    header.appendChild(logoProfissao);
    header.appendChild(menu);
    header.appendChild(headerBtns);
}

function createButton(id, href, iconClass, text) {
    const button = document.createElement('button');
    button.className = 'btn_header';
    button.id = id;
    button.setAttribute('onclick', `window.location.href='${href}'`);

    const icon = document.createElement('i');
    icon.className = iconClass;

    const h4 = document.createElement('h4');
    h4.innerText = text;

    button.appendChild(icon);
    button.appendChild(h4);

    return button;
}