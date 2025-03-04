export interface KLine {
    close: string;
    end: string;
    high: string;
    low: string;
    open: string;
    quoteVolume: string;
    start: string;
    // trades: string;
    volume: string;
}

export interface Trade {
    "id": number,
    "isBuyerMaker": number,
    "price": string,
    "quantity": string,
    "quoteQuantity": string,
    "timestamp": string
}

export interface Depth {
    // bids is an array of an array with 2 values 
    bids: [string, string][],
    asks: [string, string][],
    lastUpdateId:  string
}

export interface Ticker {
    "firstPrice": string,
    "lastPrice": string,
    "high": string,
    "low": string,
    "priceChange": string,
    "priceChangePercent": string,
    "quoteVolume": string,
    "symbol": string,
    "trades": string,
    "volume": string
}