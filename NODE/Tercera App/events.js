const EventEmitter = require('events');

const emisorProduct = new EventEmitter();

emisorProduct.on('Buy', (total, numProduct) => {
    console.log(`Buy ${numProduct}`);
    console.log(`For $ ${total}`);
    
});

emisorProduct.emit('Buy', 500, 5);