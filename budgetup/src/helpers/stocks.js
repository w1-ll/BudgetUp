export const getStockPrice = function(stockSymbol) {

const liveStockPrice = require('live-stock-price');
return liveStockPrice(stockSymbol)
    .then((price) => {
        console.log('Stock price:', price);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
};
