import fetch from "node-fetch";
import { getMeal } from "../api/meal";
import config from "../config";

const formatMealData = (meal: string, mealData: string[]) =>
  `오늘의 ${meal}은 ${mealData.join(", ")}~`;

export const getBreakfastText = async () =>
  formatMealData("아침", (await getMeal()).breakfast);
const getLaunchText = async () =>
  formatMealData("점심", (await getMeal()).launch);
const getDinnerText = async () =>
  formatMealData("저녁", (await getMeal()).dinner);

const send = (text: string) =>
  fetch(config.webhookUri, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      content: text,
    }),
  });

export const sendBreakfast = async () => send(await getBreakfastText());
export const sendLaunch = async () => send(await getLaunchText());
export const sendDinner = async () => send(await getDinnerText());
