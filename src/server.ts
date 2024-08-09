import express from "express";
import smsRoutes from "./routes/sms";

class Server {
  public app: express.Application;
  public PORT: number | string;

  constructor() {
    require("dotenv").config();
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api", smsRoutes);
    this.PORT = process.env.PORT;
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log("server is running on " + this.PORT);
    });
  }
}
const server = new Server();

server.start();
