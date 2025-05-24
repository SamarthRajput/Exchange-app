import express from "express";
import cors from "cors";
import { depthRouter } from "./routes/depth";
import { orderRouter } from "./routes/order";
import { tradeRouter } from "./routes/trade";
import { klinesRouter } from "./routes/kline";
import { tickersRouter } from "./routes/ticker";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/order", orderRouter);
app.use("/api/v1/depth", depthRouter);
app.use("/api/v1/trades", tradeRouter);
app.use("/api/v1/klines", klinesRouter);
app.use("/api/v1/tickers", tickersRouter);


app.listen(3000, () => {
    console.log("Listening on the port 3000");
})
