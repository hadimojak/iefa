import { Router } from "express";
import { sendSMS } from "../services/smsService";

const router = Router();

router.post("/setActiveProvider", async (req, res) => {
  //provider 1 selceted
  res.send("OK").status(200);
});

router.post("/sendSms", async (req, res) => {
  const result = await sendSMS("hellow", "9123143243");

  res.send(result).status(200);
});

export default router;
