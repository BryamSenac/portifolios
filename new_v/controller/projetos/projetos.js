import { trocarBanner } from "./banner.js";
import { iniciarTrocaAutomatica } from "./banner.js";

import { trocarMenu } from "./menu.js";

import { criarCartoes } from "../../view/js/projetos/cartoes_view.js";

import { escodeTelaCad } from "./telacad.js";
import { recolheDados } from "./telacad.js";
import { escodeTelaAtt } from "./telaatt.js";
import { recolheDadosAtt } from "./telaatt.js";

import { escodeTelaDel, recolheDadosDel} from './confirm_delete.js';
// import { escodeTelaSenha, mostraTelaSenha } from './confirma_senha.js';

window.escodeTelaDel = escodeTelaDel;
window.recolheDadosDel = recolheDadosDel;
// window.escodeTelaSenha = escodeTelaSenha;
// window.mostraTelaSenha = mostraTelaSenha;


window.escodeTelaCad = escodeTelaCad;
window.recolheDados = recolheDados;
window.escodeTelaAtt = escodeTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;

window.trocarMenu = trocarMenu;
window.trocarBanner = trocarBanner;

document.addEventListener("DOMContentLoaded", function(){
    criarCartoes();
    iniciarTrocaAutomatica();
});