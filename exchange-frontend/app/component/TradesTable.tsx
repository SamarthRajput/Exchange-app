import { Trade } from "../utils/types";

export function TradesTable({trades} : { trades: Trade[] }) {
    return <div className="flex flex-col no-scrollbar overflow-y-scroll">   
        {trades.map((trades) =>( <ShowTrades price={trades.price} quantity={trades.quantity} key={trades.id} isBuyerMaker={trades.isBuyerMaker}/>))}
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