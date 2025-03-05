import axios from "axios";
import { Depth, KLine, Ticker, Trade } from "./types";

// Basic backend points that we have to render them on our frontend 

const BASE_URL = "http://localhost:3006/api/v1";

// the getTicker function accepts market as an argument 
export async function getTicker(market: string): Promise<Ticker> {
    // the getTickers function returns all the market 
    const tickers = await getTickers();
    // we will get the ticker from tickers api
    const ticker = tickers.find(t => t.symbol === market);
    if(!ticker){
        throw new Error(`No ticker found for ${market}`);
    }
    return ticker;
}

// the getTickers() function returns all the market eg SOL_USDC, ETH_USD etc
export async function getTickers(): Promise<Ticker[]> {
    const response = await axios.get(`${BASE_URL}/tickers`);
    return response.data;
}  

// The getDepth function returns all the bids and the asks 
// the api returns the type of the data, ki the asks and the bids are an array of tuples, tuple is an array with 2 values 
// The getDepth function returns us the orderbook with asks and the bids 
export async function getDepth(market: string): Promise<Depth> {
    const response = await axios.get(`${BASE_URL}/depth?symbol=${market}`);
    console.log(response);
    return response.data;
}

// getTrades() function will return the recent trades that have happened on a specific market 
export async function getTrades(market: string): Promise<Trade[]> {
    const response = await axios.get(`${BASE_URL}/trades?symbol=${market}`);
    return response.data;
}

// The getKLines function represents all the chart data, basically a bunch of candles that we get back from the backend 
export async function getKLines(market: string, interval: string, startTime: number, endTime: number): Promise<KLine[]> {
    const response = await axios.get(`${BASE_URL}/klines?symbol=${market}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`);
    const data: KLine[] = response.data;
    return data.sort((x, y) => (Number(x.end) < Number(y.end) ? -1 : 1));
}