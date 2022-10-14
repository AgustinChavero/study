const statusDelivery = () => {
    return Math.random() < 0.5;
}

//for (let i = 0 ; i < 10 ; i++) {
//    console.log(statusDelivery());
//}

const deliveryPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (statusDelivery ()) {
            resolve('SIIIIIIIIIIIIIIII');
        } else {
            reject ('NOOOOOOOOOOOOOOOO');
        }
    }, 3000);
});

deliveryPizza
    .then((confirmation) => {
        console.log(confirmation);
    })
    .catch((failed) => {
        console.log(failed);
    });