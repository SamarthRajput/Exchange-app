import { useEffect, useState } from "react"
import { Trade } from "../utils/types"
import { getTrades } from "../utils/httpClient";
import { TradesTable } from "./TradesTable";
import { SignalingManager } from "../utils/SignalingManager";

export function Trades({market} : {market: string}) {

    const [trades, setTrades] = useState<Trade[]>([]);

    useEffect(() => {
        getTrades(market).then((d) => {
            setTrades(d)
        });

        SignalingManager.getInstance().registerCallback("trade", (data: Partial<Trade[]>) => setTrades(prevTrade => ([
            
        ])), `TRADE-${market}`);



    }, [market]);

    return <div className="flex flex-col grow overflow-y-hidden">    
        <div className="flex flex-col h-full px-3">
            <div className="flex justify-between flex-row w-2/3">
                <p className="px-1 text-left text-xs font-semibold text-[rgb(150,159,175)]">Price (USDC)</p>
                <button type="button" className="focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 flex flex-col justify-center bg-transparent rounded-xl p-0 h-auto justify-self-end text-right text-xs font-semibold text-[rgb(150,159,175)]" data-rac="" id="react-aria8190765377-:rbl:">Qty (SOL)</button>
            </div>
                {trades && <TradesTable trades={trades}/>}
        </div>
    </div>
}