import { createClient, RedisClientType } from "redis";
import { UserManager } from "./UserManager";

export class SubscriptionManager {
    private static instance: SubscriptionManager;
    private subscriptions: Map<string, string[]> = new Map();
    private reverseSubscriptions: Map<string, string[]> = new Map();
    private redisClient: RedisClientType;
    
    private constructor(){
        this.redisClient = createClient();
        this.redisClient.connect();
    }

    // Singleton pattern for redisClient
    public static getInstance(){
        if(!this.instance){
            this.instance = new SubscriptionManager();
        }
        return this.instance;
    }

    public subscribe(userId: string, subscription: string){
        if(this.subscriptions.get(userId)?.includes(subscription)) {
            return
        }

        this.subscriptions.set(userId, (this.subscriptions.get(userId) || []).concat(subscription));
        this.reverseSubscriptions.set(subscription, (this.reverseSubscriptions.get(subscription) || []).concat(userId));
        if(this.reverseSubscriptions.get(subscription)?.length === 1){
            this.redisClient.subscribe(subscription, this.redisCallBackHandler);
        }
    }

    private redisCallBackHandler = (message: string, channel: string) => {
        const parsedMessage  = JSON.parse(message);
        this.reverseSubscriptions.get(channel)?.forEach((s) => UserManager.getInstance().getUser(s)?.emit(parsedMessage));
    }

    public unsubscribe(userId: string, subscription: string){
        // getting subscriptions of the specific userId in a variable from the map and then applying filter on it 
        const subscriptions = this.subscriptions.get(userId);
        if(subscriptions){
            this.subscriptions.set(userId, subscriptions.filter(s => s !== subscription));
        }

        const reverseSubscription = this.reverseSubscriptions.get(subscription);
        if(reverseSubscription){
            this.reverseSubscriptions.set(subscription, reverseSubscription.filter(s => s !== userId));
            if(this.reverseSubscriptions.get(subscription)?.length === 0){
                this.reverseSubscriptions.delete(subscription);
                this.redisClient.unsubscribe(subscription);
            }
        }
    }

    public userLeft(userId: string){
        console.log("User id" + userId);
        this.subscriptions.get(userId)?.forEach(s => this.unsubscribe(userId, s));
    }

    getSubscription(userId: string){
        return this.subscriptions.get(userId) || [];
    }

}