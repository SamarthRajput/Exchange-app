"use client";

import { getDepth, getKLines, getTicker, getTrades } from "@/app/utils/httpClient";
import { useEffect, useState } from "react";
import { AskTable } from "./AskTable";
import { BidTable } from "./BidTable";

export function Depth({ market }: {market: string}){
    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();

    useEffect(() => {
        // Calling the getDepth function and setting the bids and asks array
        getDepth(market).then(d => {
            setBids(d.bids.reverse());
            setAsks(d.asks);
        });

        getTicker(market).then(t => setPrice(t.lastPrice));
        // the getTrades get the trades happened so far
        // getTrades(market).then(t => setPrice(t[0].price));
        // getKLines(market, "1h", 1640099200, 1640100800).then(t => setPrice(t[0].close));

    }, []);


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


