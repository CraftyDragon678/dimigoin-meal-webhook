import cron from "node-cron";
import { sendBreakfast, sendLaunch, sendDinner } from "./send";

const registerTasks = () => {
  cron.schedule("0 7 * * *", sendBreakfast);
  cron.schedule("30 12 * * *", sendLaunch);
  cron.schedule("30 18 * * *", sendDinner);
};

export default registerTasks;
