// TODO: Avoid floats everywhere, use a decimal similar to the paytm project for every currency

export const BASE_CURRENCY = "INR";

interface UserBalance {
    [key: string]: {
        available: number;
        locked: number;
    }
}

export class Engine {
    private orderbooks: OrderBook[] = [];
}