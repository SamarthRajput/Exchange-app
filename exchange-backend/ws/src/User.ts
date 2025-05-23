import { WebSocket } from "ws";

export class User {
    private id: string;
    private ws: WebSocket;

    constructor(id: string, ws: WebSocket){
        this.id = id;
        this.ws = ws;
        this.addListeners();
    }

    private subscriptions: string[] = [];

    public subscribe(subscription: string) {
        this.subscriptions.push(subscription);
    }

    public unsubscribe(subscription: string){
        this.subscriptions = this.subscriptions.filter(s => s !== subscription);
    }

    emit(message: ){
        this.ws.send(JSON.stringify(message));
    }

    private addListeners(){
        this.ws.on("message", (message: string) => {
            const parsedMessage = JSON.parse(message);
            if(parsedMessage.method === SUBSCRIBE){
                parsedMessage.params.forEach(s =>)
            }
        });
    }

}