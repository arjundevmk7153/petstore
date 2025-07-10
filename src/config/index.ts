import dotenv from "dotenv";
dotenv.config();

export function getConfig() {
  return {
    BASE_URL: process.env.BASE_URL || "",
    API_KEY: process.env.API_KEY || "",
  };
}
