const menu = document.getElementById('menu');
const headerBtns = document.getElementById('header_btns');

export function closeMenu(){
    menu.className = 'menu_desative';
    headerBtns.style.right = '-20vw';
}

export function openMenu(){
    menu.className = 'menu_active';
    headerBtns.style.right = '1vw';
}