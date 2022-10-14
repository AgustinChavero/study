const promessDone = false; //Puede ser true tambien

const myPromess = new Promise((resolve, reject) => {
    setTimeout (() => { //setTimeout esta de adorno
        if(promessDone) {
            resolve('Done');
        } else {
            reject ('Didnt');
        }
    }, 3000)
});

const promessResolved = (valor) => {
    console.log(valor)
}

const promessRejected = (foul) => {
    console.log(foul);
}

myPromess.then(promessResolved, promessRejected);

