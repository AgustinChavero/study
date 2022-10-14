function order(product) {
    return new Promise((resolve, reject) => {
        console.log(`Order: ${product} from Store`);
        setTimeout(()=> {
            if (product == 'Phone') {
                resolve('Phone Order');
            } else {
                reject('Not stock');
            }
        }, 2000);
    });
};

function processOrder(response) {
    return new Promise(resolve => {
        console.log('Response in progress');
        console.log(`Response: ${response}`);
        setTimeout(() => {
            resolve('Process Done');
        }, 4000);
    });
};

//order('Phone')
//    .then(response => {
//        console.log('Response Done');
//        console.log(response)
//        return processOrder(response);
//    })
//    .then(responseProcessed => {
//        console.log(responseProcessed);
//    })
//    .catch(error => {
//        console.log(error);
//    });


async function Done(product) { //Ordenar Producto
    try {const response = await order(product);
     console.log('Response received');
     const responseProcessed = await processOrder(response);
     console.log(responseProcessed);
     } catch (error) {
         console.log(error);
     }
}
 
Done('Phone');
