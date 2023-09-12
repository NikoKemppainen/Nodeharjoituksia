const LATEST_PRICES_ENDPOINT = 'https://api.porssisahko.net/v1/latest-prices.json';
 
async function fetchLatestPriceData() {
  const response = await fetch(LATEST_PRICES_ENDPOINT);
  const json = await response.json()
  //console.log(json)
  return json;
}
 
function getPriceForDate(date, prices) {
  const matchingPriceEntry = prices.find(
    (price) => new Date(price.startDate) <= date && new Date(price.endDate) > date
  );
 
  if (!matchingPriceEntry) {
    throw 'Price for the requested date is missing';
  }
 
  return matchingPriceEntry.price;
}
 
 
fetchLatestPriceData()
    .then((json) => console.log(json))
    .catch((err) => console.log(err))