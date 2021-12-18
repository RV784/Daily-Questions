let arr = [10, 20, 30, 40, 50];

let sum = arr.reduce(function(pv, cv, ci, arr){
    console.log(pv + " " + cv + " " + ci);
    return pv+ci;
})
console.log(sum);

let sum2 = arr.reduce(function(pv, cv, ci, arr){
    console.log(pv + " " + cv + " " + ci);
    return pv+ci;
}, 0)
console.log(sum2);

//Custom Array Reduce
Array.prototype.myReduce = function(cb, iv){
    let oarr = this;
    let pv;

    if(iv == undefined){
        pv = oarr[0];
        for(let i = 0 ; i < oarr.length ; i++){
            let cv = oarr[i];
            pv = cb(pv, cv, i, oarr);
        }
    }
    else{
        pv = iv;
        for(let i = 0 ; i < oarr.length ; i++){
            let cv = oarr[i];
            pv = cb(pv, cv, i, oarr);
        }
    }
    return pv;
}