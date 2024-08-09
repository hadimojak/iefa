import { Router } from "express";
import { sendSMS, setActiveProvider } from "../services/smsService";

const router = Router();

router.post("/setActiveProvider", async (req, res) => {
  const result = await setActiveProvider(req.body);
  console.log({ result });

  res.send(result).status(200);
});

router.post("/sendSms", async (req, res) => {
  const result = await sendSMS("hellow", "9123143243");

  res.send(result).status(200);
});

export default router;
