"use client";
import { useEffect, useState } from "react"
import { getMarkets } from "../utils/httpClient";
import { NavBar } from "../component/NavBar";

export default function Page(){

    const [markets, setMarkets] = useState();

    useEffect(() => {
        getMarkets().then(data => {
            setMarkets(data);
            console.log(data);
        })
    }, [])

    return <div>
        <NavBar />
    </div>
}