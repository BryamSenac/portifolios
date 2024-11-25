import { closeMenu, openMenu } from "./../view/js/menu.js";

let open = false;

export function switchMenu(){
    if(open){
        closeMenu();
    }else{
        openMenu();
    }
    open = !open;
}