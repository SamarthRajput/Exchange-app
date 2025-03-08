import { Ticker, Trade } from "./types";

export const BASE_URL = "wss://ws.backpack.exchange/";

// This is a singleton class
export class SignalingManager {
    private ws: WebSocket;
    public static instance: SignalingManager;
    private bufferedMessages: any[] = [];
    private callbacks: any = {};
    private id: number;
    private initialized: boolean = false;


    private constructor(){
        this.ws = new WebSocket(BASE_URL);
        this.bufferedMessages = [];
        this.id = 1;
        this.init();
    }

    public static getInstance(){
        if(!this.instance){
            this.instance = new SignalingManager();
        }
        return this.instance;
    }

    init(){
        this.ws.onopen = () => {
            this.initialized = true;
            // Until websocket connection doesn't open we will store all the message in an bufferedMessages array
            // And when websocket connection gets open we will iterate over all the message one by one
            this.bufferedMessages.forEach((message) => {
                this.ws.send(JSON.stringify(message));
            });
            this.bufferedMessages = [];
        }

        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            const type = message.data.e;
            if(this.callbacks[type]){
                this.callbacks[type].forEach(({ callback }: { callback: any }) => {
                    if(type === "ticker"){
                        const newTicker: Partial<Ticker> = {
                            lastPrice: message.data.c,
                            high: message.data.h,
                            low: message.data.l,
                            volume: message.data.v,
                            quoteVolume: message.data.V,
                            symbol: message.data.s
                        }

                        callback(newTicker);
                    }

                    if(type === "depth"){
                        const updatedBids = message.data.b;
                        const updatedAsks = message.data.a;
                        callback({ bids: updatedBids, asks: updatedAsks });
                    }

                    // if(type === "trade"){
                    //     console.log(message.data);
                    //     //     const isBuyerMaker =  message.data.m;
                    //     //     const price = message.data.p;
                    //     //     const quantity = message.data.q;
                    //     //     const timestamp =  message.data.t;

                    //     // callback({ isBuyerMaker: isBuyerMaker, price: price, quantity: quantity, timestamp: timestamp});
                    // }
                });
            }
        }
    }

    sendMessage(message: any) {
        const messageToSend = {
            ...message,
            id: this.id++
        }
        if (!this.initialized){
            this.bufferedMessages.push(message);
            return;
        }
        this.ws.send(JSON.stringify(messageToSend));
    } 

    async registerCallback(type: string, callback: any, id: string){
        this.callbacks[type] = this.callbacks[type] || [];
        this.callbacks[type].push({ callback, id });
    }

    async deRegisterCallback(type: string, id: string){
        if(this.callbacks[type]){
            const index = this.callbacks[type].findIndex(( { callback }: { callback: any } ) => callback.id === id);
            if(index !== -1){
                this.callbacks[type].splice(index, 1);
            }
        }
    }

};

