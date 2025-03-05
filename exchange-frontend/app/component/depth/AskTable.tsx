export const AskTable = ( {asks} :{ asks: [string, string][] }) => {
    let currentTotal = 0;
    const relevantAsks = asks.slice(0, 15);
    // The backend returns us the relevantAsks as
    /*
     * 129.93 10
     * 129.94 5
     * 132.96 3
     * 132.97 253.03 
     */
    // The asks goes up as we go up, but the backend returns us from top to bottom as we move below the asks goes up
    // we get the asks in a sorted fashion, thats why we have reversed them, it get sorted in bottom to top fashion as we move up the asks goes up  
    relevantAsks.reverse();
    /*
     * 132.97 252
     * 132.96 3
     * 129.94 5
     * 129.93 10
     */
    // console.log(relevantAsks);
    let asksWithTotal: [string, string, number][] = [];
    for(let i = relevantAsks.length - 1; i >= 0; i++){
        const [price, quantity] = relevantAsks[i];
        asksWithTotal.push([price, quantity, currentTotal = currentTotal + Number(quantity)]);
    }
    // After push the totalquantity in the asksWithTotal array the array will be become sorted again in top to bottom fashion
    /*
     * 129.93 10       10
     * 129.94 5        15
     * 132.96 3        18
     * 132.97 252     270
     */
    
    const maxTotal = relevantAsks.reduce((acc, [_, quantity]) => acc + Number(quantity), 0);
    // That' why we have reversed it here to make it again in bottom to top manner 
    /*
     * 132.97 252     270
     * 132.96 3        18
     * 129.94 5        15
     * 129.93 10       10
     */
    asksWithTotal.reverse();


    return <div>
        {asksWithTotal.map(([price, quantity, total]) => <Ask maxTotal={maxTotal} key={price} price={price} quantity={quantity} total={total} />)};
    </div>
}


function Ask({price, quantity, total, maxTotal}: {price: string, quantity: string, total: number, maxTotal: number}){
    return <div
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
            background: "rgba(228, 75, 68, 0.325)",
            transition: "width 0.3s ease-in-out",
        }}
    ></div>
    <div className="flex justify-between text-xs w-full">
        <div>
            {price}
        </div>
        <div>
            {quantity}
        </div>
        <div>
            {total?.toFixed(2)}
        </div>
    </div>
    </div>
}