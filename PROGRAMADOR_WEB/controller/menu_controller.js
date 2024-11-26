import { closeMenu, openMenu } from "../view/js/menu_view.js";

let open = false;

export function switchMenu(){
    if(open){
        closeMenu();
    }else{
        openMenu();
    }
    open = !open;
}