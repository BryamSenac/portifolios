export function validatePasswordUser(password){
    if ( password == '123'){
        localStorage.setItem('key', 'é o bryam');
        return true;
    }else{
        return false;
    }
}