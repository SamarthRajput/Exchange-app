import { createClient, RedisClientType } from "redis";

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
    }

}