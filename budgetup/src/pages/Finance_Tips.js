import { getStockPrice } from "../helpers/stocks";
import React from "react";
function Finance_Tips() {
  const [stockPrice, setStockPrice] = React.useState(0);
  React.useEffect(() => {
    getStockPrice("AAPL").then((price) => {
      setStockPrice(price);
    });
  }, []);
  return(
    <div>Stock price: {stockPrice}</div>
  );
}