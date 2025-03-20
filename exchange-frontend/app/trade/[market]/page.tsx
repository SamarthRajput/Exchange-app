"use client";
import { AppBar } from "@/app/component/AppBar";
import { Depth } from "@/app/component/depth/Depth";
import { MarketBar } from "@/app/component/MarketBar";
import { SwapUI } from "@/app/component/SwapUI";
import { Trades } from "@/app/component/Trades";
import { TradeView } from "@/app/component/TradeView";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page(){
    // We will get the market from the params in the url 
    const { market } = useParams();
    const [order, setOrder] = useState<"depth" | "trade">("depth");
    return <div>
        <AppBar />
    <div className="flex flex-row flex-1">
        <div className="flex flex-col flex-1">
            <MarketBar market={market as string}/>
            <div className="flex flex-row h-[620px] border-y border-slate-800 ">
                <div className="flex flex-col flex-1">
                    <TradeView market={market as string} />
                </div>
                <div className="w-[1px] flex-col border-slate-800 border-l"></div>
                <div className="flex flex-col w-[250px] overflow-hidden">
                    <div className="px-4 py-4">
                        <div className="items-center justify-start flex-row flex space-x-2">
                            <div className={`flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-none hover:opacity-90 h-[32px] px-3 
                                        ${order === "depth" ? "text-[rgb(244_244_246)] bg-[rgb(32,33,39)]" : "text-[rgb(150_159_175)]"}`}
                                        onClick={() => {
                                            setOrder("depth");
                                        }}>
                                Book
                            </div>
                            <div className={`flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-none hover:opacity-90 h-[32px] px-3
                                ${order === "trade" ? "text-[rgb(244_244_246)] bg-[rgb(32,33,39)]" : "text-[rgb(150_159_175)]"}`}
                                onClick={(e) => {
                                    setOrder("trade");
                                }}
                                >
                            Trades
                        </div>
                    </div>
                    </div>
                    {order === "depth" ? <Depth market={market as string}/> : <Trades market={market as string} />}
                </div>
            </div>
        </div>

        <div className="w-[1px] flex-col border-slate-800 border-l "></div>
        <div>
            <div className="flex flex-col w-[250px]">
                <SwapUI market={market as string} />
            </div>
        </div>

    </div>
</div>
}