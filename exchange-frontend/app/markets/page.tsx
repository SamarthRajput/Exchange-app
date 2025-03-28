"use client";
import { useEffect, useState } from "react"
import { getMarkets } from "../utils/httpClient";
import { NavBar } from "../component/NavBar";
import { MarketData } from "../utils/types";
import { AllMarkets } from "../component/AllMarkets";

export default function Page(){

    const [markets, setMarkets] = useState<MarketData[]>([]);

    useEffect(() => {
        getMarkets().then(data => {
            console.log("this is the market data", data);
            setMarkets(data);
        })
    }, [])

    return <div>
        <NavBar />
        <div className="flex flex-row flex-1">
            <div className="flex px-24 flex-col justify-center items-center flex-1 pt-[100px]">
                <AllMarkets data={markets} />
            </div>

        </div>
    </div>
}