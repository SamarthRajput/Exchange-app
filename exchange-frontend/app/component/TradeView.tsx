import { useEffect, useRef } from "react";
import { KLine } from "../utils/types";
import { getKLines } from "../utils/httpClient";
import { ChartManager } from "../utils/ChartManager";

export function TradeView({
    market,
}: {
    market: string
}) {

    const chartRef = useRef<HTMLDivElement>(null);
    // We also use ref for storing any variables across renders, if there is a variable that you dont want to change across renders 
    const chartManagerRef = useRef<ChartManager>(null);

    const init = async () => {
        let klineData: KLine[] = [];
        try {       
            // Math.floor((new Date().getTime() - 1000 * 60 * 60 * 24 * 7 )/ 1000 ) -> give me all the data for last one 1 week 
            klineData = await getKLines(market, "1h", Math.floor((new Date().getTime() - 1000 * 60 * 60 * 24 * 7 )/ 1000 ), 
            // Math.floor(new Date().getTime() / 1000) -> till today, in an hourly fashion on the particular market 
            Math.floor(new Date().getTime() / 1000));
        }
        catch(e){ }

        if(chartRef){
            if(chartManagerRef.current) {
                chartManagerRef.current.destroy();
            }
            // We have created this ChartManager abstraction on top of the tradingView library, so that we can easily just pass in the candles data 
            const chartManager = new ChartManager(
                chartRef.current,
                [
                    ...klineData?.map((x) => ({
                        // any exchange give us the data in string that why we have converted it into a number  
                        close: parseFloat(x.close),
                        high: parseFloat(x.high),
                        low: parseFloat(x.low),
                        open: parseFloat(x.open),
                        timestamp: new Date(x.end)
                    })),
                ].sort((x, y) => (x.timestamp < y.timestamp ? -1: 1)) || [],
                {   
                    background: "#0e0f14",
                    // color: "white"
                }
            );
            chartManagerRef.current = chartManager;
        }
    };

    // If the market changes, the chart will rerender and hence the useEffect will be called 
    useEffect(() => {
        // we are calling the init() function anytime the market changes or the reference to the div changes which is holding my chart  
        init();
    }, [market, chartRef]);

    return (
        <>
            <div ref={chartRef} style={{height: "520px", width: "100%", marginTop: 4}}></div>
        </>
    )
}