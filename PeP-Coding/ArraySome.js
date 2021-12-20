Array.prototype.MySome = function(callBack){
    let oarr = this;

    for(let i = 0 ; i < oarr.length ; i++){
        let v = oarr[i];
        let rv = callBack(v, i, oarr);

        if(rv == true)
        return true;
    }
    return false;
}