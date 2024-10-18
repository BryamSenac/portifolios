import { cadastrarCatao } from "../../services/projetos/cartoes_services.js";
import { errorInputs, resetInputs } from "../../view/js/projetos/styles_inputs.js";

let telaCad = document.getElementById('telaCadastro');
export function escodeTelaCad() {
    telaCad.style.left = '-100vw';
}
export function mostraTelaCad() {
    telaCad.style.left = '0';
}

export function recolheDados() {
    let linguagens = document.getElementById('linguagens');
    let nome = document.getElementById('nome');
    let link = document.getElementById('link');

    if(linguagens.value === '') {
        errorInputs(linguagens);
    }
    if(nome.value === ''){
        errorInputs(nome);
    }
    if(link.value === ''){
        errorInputs(link);
    }
    if(linguagens.value != '' && nome.value != '' && link.value != ''){
        cadastrarCatao(linguagens.value, nome.value, link.value);
        escodeTelaCad();

        resetInputs(linguagens);
        resetInputs(nome);
        resetInputs(link)
    }
}