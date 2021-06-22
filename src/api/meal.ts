import fetch from "node-fetch";

interface MealDataApi {
  meal: Record<"breakfast" | "launch" | "dinner", string[]> & {
    _id: string;
    date: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const getMeal = async () => {
  const data: MealDataApi = await (
    await fetch("https://api.dimigo.in/meal/today")
  ).json();
  return data.meal;
};
