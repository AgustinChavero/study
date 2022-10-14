async function order(product) {
   try {const response = await orderProduct(product);
    console.log('Response received');
    const responseProcessed = processOrder(response);
    console.log(responseProcessed);
    } catch (error) {
        console.log(error);
    }
}

order('Phone');