import fs from "fs";
import path from "path";

const providerConfigPATH = path.join(__dirname, "..", "..", "provider.config.json");
const providerBUfferData = fs.readFileSync(providerConfigPATH);
const data: { providers: { name: string; status: number }[] } = JSON.parse(
  providerBUfferData.toString()
);


export { data, providerConfigPATH };
