import axios from "axios";

// the market market will populate the market TATA_INR with random bids and asks
const BASE_URL = "http://localhost:3000";
const TOTAL_BIDS = 15;
const TOTAL_ASKS = 15;
const MARKET = "TATA_INR";
const USER_ID = "5";

async function main(){
    const price = 1000 + Math.random() * 10;
    const openOrders = await axios.get(`${BASE_URL}/api/v1/order/open?userId=${USER_ID}&market=${MARKET}`);

    const totalBids = openOrders.data.filter((o: any) => o.side === "buy").length;
    const totalAsks = openOrders.data.filter((o: any) => o.side === "ask").length;

    const cancelledBids = await cancelBidsMoreThan(openOrders.data, price);
    const cancelledAsks = await cancelAsksLessThan(openOrders.data, price);

    let bidsToAdd = TOTAL_BIDS - totalBids - cancelledBids;
    let asksToAdd = TOTAL_ASKS - totalAsks - cancelledAsks;

    while(bidsToAdd > 0 || asksToAdd > 0){
        if(bidsToAdd > 0){
            await axios.post(`${BASE_URL}/api/v1/order`, {
                market: MARKET,
                price: (price - Math.random() * 1).toFixed(1).toString(),
                quantity: "1",
                side: "buy",
                userId: USER_ID
            });
            bidsToAdd--;
        }
        if(asksToAdd > 0){
            await axios.post(`${BASE_URL}/api/v1/order` , {
                market: MARKET,
                price: (price - Math.random() * 1).toFixed(1).toString(),
                quantity: "1",
                side: "sell",
                userId: USER_ID
            });
            asksToAdd--;
        }
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    main();
}