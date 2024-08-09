import { Router, Request, Response } from "express";
import { sendSMS, setActiveProvider } from "../services/smsService";

const router = Router();

function validateProvider(
  req: Request<{}, {}, { provider: string; status: number }>,
  res,
  next
) {
  if (!("provider" in req.body)) {
    return res.send(500, "no provider inserted");
  } else if (!["behsa", "enyak"].includes(req.body.provider)) {
    return res.send(500, "wrong provider");
  } else if (!("status" in req.body)) {
    return res.send(500, "no status inserted");
  }
  next();
}

function validateSMS(
  req: Request<{}, {}, { message: string; phoneNumber: string }>,
  res,
  next
) {
  if (!("message" in req.body)) {
    return res.send(500, "there is no message");
  } else if (!("phoneNumber" in req.body)) {
    return res.send(500, "there is no phone number");
  } else if (typeof req.body.message !== "string") {
    return res.send(500, "message is no string format");
  } else if (!/^09[0|1|2|3][0-9]{8}$/.test(req.body.phoneNumber)) {
    return res.send(500, "phone number is incurrect");
  }
  next();
}

router.post("/setActiveProvider", validateProvider, async (req, res) => {
  const result = await setActiveProvider(req.body);
  if (result.resultCode === 200) {
    return res.send(result).status(200);
  } else throw new Error("general Error");
});

router.post("/sendSms", validateSMS, async (req, res) => {
  const result = await sendSMS("hellow", "9123143243");

  res.send(result).status(200);
});

export default router;
