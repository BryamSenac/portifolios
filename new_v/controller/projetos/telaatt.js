import { atualizarCartao } from "../../services/projetos/cartoes_services.js";
import { errorInputs, resetInputs } from "../../view/js/projetos/styles_inputs.js";

let id;

let telaCad = document.getElementById('telaAtt');
export function escodeTelaAtt() {
    telaCad.style.right = '-100vw';
}
export function mostraTelaAtt(i) {
    id = i;
    telaCad.style.right = '0';
}

export function recolheDadosAtt() {
    let linguagens = document.getElementById('linguagensAtt');
    let nome = document.getElementById('nomeAtt');
    let link = document.getElementById('linkAtt');


    atualizarCartao(id, linguagens.value, nome.value, link.value);
    escodeTelaAtt();

    resetInputs(linguagens);
    resetInputs(nome);
    resetInputs(link)

}