import dotenv from "dotenv";

dotenv.config();

const config = {
  webhookUri: process.env.WEBHOOK_URI ?? "",
};

if (!config.webhookUri) {
  console.error("WEBHOOK_URI is not provided");
  process.exit(-1);
}

export default config;
