function password(str){
    if (!/[0-9]/.test(str)){
        return false;
    }
    if (!/[]/.test(str)) {
        return false;
    }
    
    return true;
}

