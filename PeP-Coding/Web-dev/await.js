function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink === 'coffee'){
            resolve('order placed');
        }else{
            reject('sorry, we only serve coffee');
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log("order is being processed");
        resolve(`coffee served for the ${order}`);
    })
}

// //SCENARIO WITH PROMISES
// placeOrder('tea').then(function(orderfromCustomer){
//     console.log("request recieved");
//     let orderisProcessed = processOrder(orderfromCustomer);
//     return orderisProcessed;
// }).then(function(orderisProcessed){
//     console.log(orderisProcessed);
// }).catch(function(err){
//     console.log(err);
// })



//ASYNC - AWAIT
// clean version of promises
async function serveOrder(){

    try{
        const orderRecieved = await placeOrder('tea');
        console.log("order recieved");
        const processedOrder = await processOrder(orderRecieved);
        console.log(processedOrder);

    } catch (error){
        console.log(error);
    }
}
serveOrder();