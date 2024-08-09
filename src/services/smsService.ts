import fs from "fs";
import path from "path";
interface Body {
  provider: "behsa" | "enyak";
  status: 1 | 0;
}

const sendSMS = async (message: string, phoneNumber: string) => {
  return `${message}    + ${phoneNumber}`;
};

const setActiveProvider = async (body: Body) => {
  const providerData = fs.readFileSync(
    path.join(__dirname, "..", "..", "provider.config.json")
  );
  const data: { providers: { name: string; status: number }[] } = JSON.parse(
    providerData.toString()
  );

  switch (body.provider) {
    case "behsa":
      const lastStatus = data.providers.find(
        (val) => val.name === body.provider
      ).status;
      console.log({ lastStatus, body: body.status });
      if (lastStatus === body.status) return {resultCode:'15'};
      else return "not OK";

    default:
      return "not OK";
  }
};

export { sendSMS, setActiveProvider };
