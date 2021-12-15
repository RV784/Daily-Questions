Array.prototype.myMap = function(callback){
    let res = [];

    for(let i = 0 ; i < this.length ; i++){
        let val = this[i];
        let rv = callback(val, i, arr);
        res.push(rv);
    }

    return res;
}