import { useEffect, useState } from "react"
import { Trade } from "../utils/types"
import { getTrades } from "../utils/httpClient";
// import { TradesTable } from "./TradesTable";
import { SignalingManager } from "../utils/SignalingManager";

export function Trades({market} : {market: string}) {

    const [trades, setTrades] = useState<Trade[]>();

    useEffect(() => {
        getTrades(market).then(d => {
            setTrades(d);
        });

        // // **** Need to get data from websocket server for trades component 
        SignalingManager.getInstance().registerCallback("trade", (data: Partial<Trade>) => {
            if(data){
                let newData: Trade = {
                    id: data.id ? data.id : 0,
                    isBuyerMaker: data.isBuyerMaker ? data.isBuyerMaker : false,
                    price: data.price ? data.price: "",
                    quantity: data.quantity ? data.quantity : "",
                    quoteQuantity: data.quoteQuantity ? data.quoteQuantity : "",
                    timestamp: data.timestamp ? data.timestamp : ""
                };

                setTrades((prevTrade) => (prevTrade && data ? [newData, ...prevTrade] : [newData]));
            }
        }, `TRADE-${market}`);
        SignalingManager.getInstance().sendMessage({"method": "SUBSCRIBE", params: [`trade.${market}`]});
        return () => {
            SignalingManager.getInstance().deRegisterCallback("trade", `trade=${market}`);
            SignalingManager.getInstance().sendMessage({"method": "UNSUBCRIBE",  params: [`trade.${market}`]});
        } 
        
    }, [market]);

    return <div className="flex flex-col grow overflow-y-hidden">    
        <div className="flex flex-col h-full px-3">
            <div className="flex justify-between flex-row w-2/3">
                <p className="px-1 text-left text-xs font-semibold text-[rgb(150,159,175)]">Price (USDC)</p>
                <button type="button" className="focus:ring-blue-200 focus:none focus:outline-none hover:opacity-90 disabled:opacity-80 disabled:hover:opacity-80 flex flex-col justify-center bg-transparent rounded-xl p-0 h-auto justify-self-end text-right text-xs font-semibold text-[rgb(150,159,175)]" data-rac="" id="react-aria8190765377-:rbl:">Qty (SOL)</button>
            </div>
            <div className="flex flex-col no-scrollbar overflow-y-scroll">
                {trades?.map((data, index) =>( <ShowTrades key={index} price={data.price} quantity={data.quantity} isBuyerMaker={data.isBuyerMaker}/>))}
            </div>
        </div>
    </div>
}

function ShowTrades({price, quantity, isBuyerMaker} : {price: string, quantity: string, isBuyerMaker:boolean }){

    return <div className="flex flex-row w-full cursor-default bg-transparent hover:bg-white/4 ">
        <div className="flex items-center flex-row w-[33.3%] py-1">
            <div className={`w-full text-sm font-normal capitalize tabular-nums text-[rgb(244,244,246)]/90 px-1 text-left
                ${isBuyerMaker ? "text-green-500" : "text-[rgb(253,75,78)]"}`}>
                {price}
            </div>
        </div>
        <div className="flex items-center flex-row w-[33.3%] py-1">
            <div className="w-full text-sm font-normal capitalize tabular-nums text-[rgb(244,244,246)]/90 text-right">
                {quantity}
            </div>  
        </div>
    </div>
}