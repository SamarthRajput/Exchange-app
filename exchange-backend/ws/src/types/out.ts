export type TickerUpdateMessage = {
    type: "ticker",
    data: {
        c?: string,     // close
        h?: string,     // high
        o?: string,     // open
        l?: string,     // low
        v?: string,     // volume
        s?: string,
        id: number,
        e: "ticker"
    }
}

export type DepthUpdateMessage = {
    type: "depth",
    data: {
        b?: [string, string][],     // bids is an array of string
        a?: [string, string][],     // asks is an array of string
        id: number,
        e: "depth"
    }
}

export type OutgoingMessage = TickerUpdateMessage | DepthUpdateMessage;