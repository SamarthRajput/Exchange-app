export function BidTable({ bids } : { bids: [string, string][] }){

    let currentTotal = 0;
    const relevantBids = bids.slice(0, 16);
    // console.log(relevantBids);
    // As we keep going down the bids keeps on going down, as people willing to buy at the rate comes down as keeps going down
    // Hence calculating bids with total is as simple as, ki jo bids thi unke take the price, the quantity, and the 3rd field currentTotal
    let bidsWithTotal: [string, string, number][] = relevantBids.map(([price, quantity]) => [price, quantity, currentTotal = currentTotal + Number(quantity)]);
    const maxTotal = relevantBids.reduce((acc, [_, quantity]) => acc + Number(quantity), 0);


    return <div>
        {bidsWithTotal?.map(([price, quantity, total]) => <Bid maxTotal={maxTotal} key={price} price={price} quantity={quantity} total={total}/>)}
    </div>
}

// the Bid component just renders the price, quantity and total 
export function Bid({price, quantity, maxTotal, total}: {price: string, quantity: string, maxTotal: number, total: number} ){
    return (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                backgroundColor: "transparent",
                overflow: "hidden",
            }}
        >
        <div
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${(100 * total) / maxTotal}%`,
            height: "100%",
            background: "rgba(1, 167, 129, 0.325)",
            transition: "width 0.3s ease-in-out",
            }}
        ></div>

        <div className={`flex justify-between text-xs w-full`}>
            <div className="font-semibold">
                {price}
            </div>
            <div className="font-semibold">
                {parseFloat(quantity).toLocaleString()}
            </div>
            <div className="font-semibold">
                {parseFloat(total.toFixed(2)).toLocaleString()}
            </div>
        </div>

    </div>
    )
}