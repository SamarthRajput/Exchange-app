import { z } from "zod";

export const OrderInputSchema = z.object({
    baseAsset: z.string(),
    quoteAsset: z.string(),
    price: z.number(),
    quantity: z.number(),
    side: z.enum(['buy', 'sell']),
    type: z.enum(['limit', 'market']),
    // 'ioc' stands for immediate or cancel, the kind zod type is used when the user places a market order not a limit order 
    kind: z.enum(['ioc']).optional()
})