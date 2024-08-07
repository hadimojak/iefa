import express from "express";
import smsRoutes from "./routes/sms";

require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api", smsRoutes);

export default app;
