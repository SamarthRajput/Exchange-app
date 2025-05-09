"use client";

import { useEffect, useState } from "react";
import { Ticker } from "../utils/types";
import { getTicker } from "../utils/httpClient";
import { SignalingManager } from "../utils/SignalingManager";
import Image from "next/image";

export const MarketBar = ({ market }: { market: string }) => {
    const [ticker, setTicker] = useState<Ticker | null>(null);

    useEffect(() => {
        getTicker(market).then(setTicker);
        SignalingManager.getInstance().registerCallback("ticker", (data: Partial<Ticker>) => setTicker(prevTicker => ({
            firstPrice: data?.firstPrice ?? prevTicker?.firstPrice ?? '',
            high: data?.high ?? prevTicker?.high ?? '',
            lastPrice: data?.lastPrice ?? prevTicker?.lastPrice ?? '',
            low: data?.low ?? prevTicker?.low ?? '',
            priceChange: data?.priceChange ?? prevTicker?.priceChange ?? '',
            priceChangePercent: data?.priceChangePercent ?? prevTicker?.priceChangePercent ?? '',
            quoteVolume: data?.quoteVolume ?? prevTicker?.quoteVolume ?? '',
            symbol: data?.symbol ?? prevTicker?.symbol ?? '',
            trades: data?.trades ?? prevTicker?.trades ?? '',
            volume: data?.volume ?? prevTicker?.volume ?? ''
        })), `TICKER-${market}`);

        SignalingManager.getInstance().sendMessage({"method": "SUBSCRIBE", params: [`ticker.${market}`]} );

        return () => {
            SignalingManager.getInstance().deRegisterCallback("ticker", `TICKER-${market}`);
            SignalingManager.getInstance().sendMessage({"method": "UNSUBSCRIBE", params: [`ticker.${market}`]} );
        }

    }, [market]);


    // Extract the base symbol from the market
    const baseSymbol = market.split("_")[0];
    const logoUrl = `/logos/${baseSymbol.toLowerCase()}.webp`


    return <div>
    <div className="flex items-center flex-row relative w-full overflow-hidden border-b border-slate-800">
        <div className="flex items-center justify-between flex-row no-scrollbar overflow-auto pr-4">
                <TickerRender market={market} logo={logoUrl}/>
                <div className="flex items-center flex-row space-x-8 pl-4">
                    <div className="flex flex-col h-full justify-center">
                        <p className={`font-medium tabular-nums text-greenText text-md text-green-500`}>${Number(ticker?.lastPrice).toLocaleString()}</p>
                        <p className="font-medium text-sm tabular-nums">${Number(ticker?.lastPrice).toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className={`font-medium  text-slate-400 text-sm`}>24H Change</p>
                        <p className={` text-sm font-medium tabular-nums leading-5 text-greenText ${Number(ticker?.priceChange) > 0 ? "text-green-500" : "text-red-500"}`}>{Number(ticker?.priceChange) > 0 ? "+" : ""} {ticker?.priceChange} {Number(ticker?.priceChangePercent)?.toFixed(2)}%</p></div><div className="flex flex-col">
                            <p className="font-medium text-slate-400 text-sm">24H High</p>
                            <p className="font-medium tabular-nums leading-5 text-sm ">{Number(ticker?.high).toLocaleString()}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-medium text-slate-400 text-sm">24H Low</p>
                                <p className=" font-medium tabular-nums leading-5 text-sm ">{Number(ticker?.low).toLocaleString()}</p>
                            </div>
                        <button type="button" className="font-medium transition-opacity hover:opacity-80 hover:cursor-pointer text-base text-left" data-rac="">
                            <div className="flex flex-col">
                                <p className="font-medium text-slate-400 text-sm">24H Volume (USDC)</p>
                                <p className="mt-1 font-medium tabular-nums leading-5 text-sm ">{(Number(ticker?.quoteVolume) - Number(ticker?.volume)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>     
}   


function TickerRender({market, logo}: {market: string, logo: string}) {
    return <div className="flex h-[60px] shrink-0 space-x-4">
        <div className="flex flex-row relative ml-2 -mr-4">
            <Image alt="SOL Logo" loading="lazy" decoding="async" data-nimg="1" className="z-10 rounded-full h-6 w-6 mt-4 outline-baseBackgroundL1" src={logo} height={22} width={22}/>
            <Image alt="USDC Logo" loading="lazy"decoding="async" data-nimg="1" className="h-6 w-6 -ml-2 mt-4 rounded-full" src="/usdc.webp" height={22} width={22} />
        </div>
    <button type="button" className="react-aria-Button" data-rac="">
        <div className="flex items-center justify-between flex-row cursor-pointer rounded-lg p-3 hover:opacity-80">
            <div className="flex items-center flex-row gap-2 undefined">
                <div className="flex flex-row relative">
                    <p className="font-medium text-sm undefined">{market.replace("_", " / ")}</p>
                </div>
            </div>
        </div>
    </button>
    </div>
}