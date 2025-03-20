"use client";

import { getDepth, getKLines, getTicker, getTrades } from "@/app/utils/httpClient";
import { useEffect, useState } from "react";
import { AskTable } from "./AskTable";
import { BidTable } from "./BidTable";
import { SignalingManager } from "@/app/utils/SignalingManager";

export function Depth({ market }: {market: string}){
    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();
    
    useEffect(() => {
        const init = async () => {
            SignalingManager.getInstance().registerCallback("depth", (data: any)  => {

                setBids((originalBids) => {
                    const bidsAfterUpdate = [...(originalBids || [])];

                        for(let i = 0; i < bidsAfterUpdate.length; i++){
                            for(let j = 0; j < data.bids.length; j++) {
                                if(bidsAfterUpdate[i][0] === data.bids[j][0]){
                                    bidsAfterUpdate[i][1] = data.bids[j][1];
                                    break;
                                }
                            }
                        }
                        // Filtering out the bids array of tuples and showing only the values which have amount is not equal to 0.00
                        return bidsAfterUpdate.filter(([_, amount]) => amount !== "0.00");
                })

                setAsks((originalAsks) => {
                    const asksAfterUpdate = [...(originalAsks || [])];
                        
                        for(let i = 0; i < asksAfterUpdate.length; i++){
                            for(let j = 0; j < data.bids.length; j++){
                                if(asksAfterUpdate[i][0] === data.bids[j][0]){
                                    asksAfterUpdate[i][1] = data.bids[j][1];
                                    break;
                                }
                            }
                        }
                        return asksAfterUpdate.filter(([_, amount]) => amount !== "0.00");
                    })
                }, `DEPTH-${market}`);

                SignalingManager.getInstance().sendMessage({"method": "SUBSCRIBE", params: [`depth.${market}`]} );

                // Calling the getDepth function and setting the bids and asks array
                getDepth(market).then(d => {
                    setBids(d.bids.reverse());
                    setAsks(d.asks);
                });
    
                getTicker(market).then(t => setPrice(t.lastPrice));
                // the getTrades get the trades happened so far
                getTrades(market).then(t => setPrice(t[0].price));
                // getKLines(market, "1h", 1640099200, 1640100800).then(t => setPrice(t[0].close));

                return () => {
                    SignalingManager.getInstance().sendMessage({"method": "UNSUBSCRIBE", params: [`depth.${market}`]} );
                    SignalingManager.getInstance().deRegisterCallback("depth", `DEPTH-${market}`);
                }
            }
            init();
        }, [market]);
        return <div>
            <TableHeader />
            {asks && <AskTable asks={asks} />}
            {price && <div>{price}</div>}
            {bids && <BidTable bids={bids} />}
        </div>
    }

function TableHeader(){
    return <div className="flex justify-between text-xs">
        <div className="text-white">Price</div>
        <div className="text-slate-500">Size</div>
        <div className="text-slate-500">Total</div>
    </div>
}


