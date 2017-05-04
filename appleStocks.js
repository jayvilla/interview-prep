/* I have an array stock_prices_yesterday where:

  -The indices are the time in minutes past trade opening time, which was 9:30am
  local time.
  -The values are the price in dollars of Apple stock at the time.

For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500.

Write an efficient algorithm for computing the best profit I could have made from 1
purchase and 1 sale of Apple stock yesterday.

No "Shorting"--you must buy before you sell. You may not buy and sell in the same
time step (at least 1 minute must pass). */

const getMaxProfit = stockPricesYesterday => {
  // make sure we have at least 2 prices
  if (stockPricesYesterday.length < 2) {
    throw Error('Getting a profit requires at least 2 prices');
  };
  // we'll greedily update min_price and max_profit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = stockPricesYesterday[0];
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  for (let i = 0; i < stockPricesYesterday.length; i++) {
    // skip the first (0th) time
    // we cant sell at the first time, since we must buy first,
    // and we cant buy and sell at the same time!
    // if we took this out, we'd try to make /and/ sell at time 0.
    // this would give a profit of 0, which is a problem if our
    // max_profit is supposed to be /negative/--we'd return 0!
    if (i === 0) continue;
    // see what our profit would be if we bought at the
    // min price and sold at the current price
    let potentialProfit = stockPricesYesterday[i] - minPrice;
    // update max_profit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
    // update min_price so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, stockPricesYesterday[i]);
  }
  return maxProfit;
}

// Example
const stockPrices = [100, 180, 260, 310, 40, 535, 695];

console.log(getMaxProfit(stockPrices));
