import { excluirCartoes } from "./../../services/projetos/cartoes_services.js";

let telaDelet = document.getElementById('confirm_delete');
let id;

export function escodeTelaDel() {
    telaDelet.style.left = '-100vw';
}
export function mostraTelaDel(i) {
    id = i;
    telaDelet.style.left = '0';
}

export function recolheDadosDel(){
    excluirCartoes(id);
    escodeTelaDel();
}