export interface KLine {
    close: string;
    end: string;
    high: string;
    low: string;
    open: string;
    quoteVolume: string;
    start: string;
    trades: string;
    volume: string;
}

export interface Trade {
    "id": number,
    "isBuyerMaker": boolean,
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
    "high": string,
    "lastPrice": string,
    "low": string,
    "priceChange": string,
    "priceChangePercent": string,
    "quoteVolume": string,
    "symbol": string,
    "trades": string,
    "volume": string
}

type CurrencyDetails = {
    "price": number,
    "market_cap": number,
    "price_change_percentage_24hr": number,
    "volume": number
}

export interface MarketData {
    "id": string,
    "symbol": string,
    "name": string,
    "image": string,
    "current_price": string,
    "market_cap": string,
    "market_cap_rank": number,
    "fully_diluted_valuation": number,
    "total_volume": number,
    "high_24h": number,
    "low_24h": number,
    "price_change_24h": number,
    "price_change_percentage_24h": number,
    "market_cap_change_24h": number,
    "market_cap_change_percentage_24h": number,
    "circulating_supply": number,
    "total_supply": number,
    "max_supply": number,
    "ath": number,
    "ath_change_percentage":number,
    "ath_date": string,
    "atl": number,
    "atl_change_percentage": number,
    "atl_date": string,
    "roi": null,
    "last_updated": string,
    "price_change_percentage_24h_in_currency": number,
    "currencies": {
        "cad": CurrencyDetails,
        "cny": CurrencyDetails,
        "eur": CurrencyDetails,
        "gbp": CurrencyDetails,
        "inr": CurrencyDetails,
        "jpy": CurrencyDetails,
        "usd": CurrencyDetails
    }
}