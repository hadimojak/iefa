import fs from "fs";
import path from "path";
interface Body {
  provider: string;
  status: number;
}

import { data, providerConfigPATH } from "../handler/providerCcnfig";
const providerEnum = { behsa: "provider1.txt", enyak: "provider2.txt" };

const sendSMS = async (message: string, phoneNumber: string) => {
  const { name } = data.providers.find((val) => val.status === 1) || {};
  if (!name) {
    return { resultCode: 500, message: "there is no active provider" };
  }
  fs.appendFileSync(
    path.join(__dirname, "..", "..", providerEnum[name]),
    `message ${message} was send to ${phoneNumber} thorw provider ${name}\r\n`
  );

  return "OK";
};

const setActiveProvider = async (body: Body) => {
  if (body.status === 1) {
    data.providers.forEach((val) => {
      if (val.name !== body.provider) {
        val.status = 0;
      } else val.status = 1;
    });
  }
  if (body.status === 0) {
    data.providers.find((val) => val.name === body.provider).status = 0;
  }

  fs.writeFileSync(providerConfigPATH, JSON.stringify(data));
  return { resultCode: 200, message: "OK" };
};

export { sendSMS, setActiveProvider };
