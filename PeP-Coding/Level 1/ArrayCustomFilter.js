Array.prototype.MyFilter = function(callback){
    let oarr = this;
    let res = [];

    for(let i = 0 ; i < oarr.length ; i++){
        let v = oarr[i];
        let rbv = callback(v,i,oarr);
        if(rbv == true){
            res.push(v);
        }
    }
    return res;
}